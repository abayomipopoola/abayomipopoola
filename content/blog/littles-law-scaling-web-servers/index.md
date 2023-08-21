---
title: Enhancing Scalability & Fault Tolerance of Web Servers
date: "2023-08-21T18:45:32.169Z"
tags: [programming, system design]
description: Explore the crucial interplay between scalability & fault-tolerance as pivotal architectural components in microservices design.
---

![Loom](./loom.jpg)

Microservices design is a key component of modern app development. This architecture of composing multiple _(mostly)_ HTTP or gRPC services offers numerous advantages, including code reuse and maintainability, scalability, and fault tolerance.

Scalability, in the context of this post, refers to the software’s ability to optimize performance based on available resources. On the other hand, fault tolerance ensures that the system remains operational even when certain components fail. The interplay between these two aspects becomes crucial when dealing with microservices.

### Little’s Law: Decoding Server Performance

<a href="/littles-law" target="_blank">_Little’s Law_</a> is a foundational theorem in operations research and system analysis. It offers insights into determining the capacity of stable systems that manage and process external requests. This theorem elegantly connects three pivotal variables: 

<img src="https://latex.codecogs.com/svg.latex?\Large L=\lambda W" title="Littles law" />

where:
- **_λ_** represents the average rate of incoming requests.
- **_W_** denotes the average time taken to process each request.
- **_L_** is the number of concurrent requests the system handles.

To illustrate, consider a system that receives 500 requests per second, with each request taking 0.5 seconds to complete. This means the system is concurrently handling 500 × 0.5 = 250 requests.

In this scenario, _L_ represents the system’s capacity, while _W_ is determined by the software’s design, its complexity, and inherent latencies. By knowing both _L_ and _W_, we can calculate the maximum request rate the system can sustain: 

<img src="https://latex.codecogs.com/svg.latex?\Large \lambda=\frac{L}{W}" title="max requests rate" />

To handle more requests, we need to increase _L_, the system’s capacity, or decrease _W_, the processing time or latency. But what if the incoming request rate surpasses _λ_? The system will no longer be stable. Requests will start queuing up. At first, they will experience much-increased latency, but quickly system resources will be fully consumed, leading to service unavailability.

#### Understanding Capacity (L)

The capacity, _L_, of a web server is not a constant value. It’s malleable, influenced by several environmental _(hardware, OS, etc.)_ and limiting factors:

- **TCP Connections**: The number of concurrent TCP connections the server can support. Modern servers can handle a staggering number of concurrent TCP connections, sometimes surpassing 2 million.
- **Bandwidth**: With today’s high bandwidth LAN technology, the network can support anywhere between 100K to over a million concurrent requests — given the total volume of a single request is under 1MB.
- **RAM**: Given that each request might consume less than 1MB of memory, RAM can support well over a million concurrent requests.
- **CPU**: Since the heavy lifting is often offloaded to microservices, CPUs can handle hundreds of thousands to millions of requests without breaking a sweat.

While our initial estimates suggest that we can maintain _L_ within a range of 100K to 1 million, the operating system introduces a crucial constraint. In a scenario where we adopt the thread-per-request model, each request occupies an OS thread until completed, and then it’s repurposed for other requests. The OS’s ability to handle threads determines our concurrent request capacity.

Threads process, pause for microservice responses and repeat. They’re not always active, but they aren’t idle either. Typically, an OS can concurrently manage 2K to 20K threads. Beyond this, increased latency affects requests, causing _W_ to rise and _λ_ to fall. Allowing a server to create threads without restraint can severely hinder our application’s performance. Typically, we usually set a strict limit on the number of threads the application can spawn, which usually falls between 500 and 10,000, but it’s rare to go beyond that.

Considering these factors, the OS reduces our optimistic capacity from the high 100Ks to below 20,000. In essence, when employing the thread-per-request model on adequate hardware, _L_ is primarily influenced by the OS’s thread capacity without inducing latency. While purchasing additional servers is an option, it’s a costly one with potential hidden expenses. Hesitation might arise, especially when recognizing that software inefficiencies are the root cause, and our existing servers remain underutilized.

#### Processing Latency (W)

Latency, often the nemesis of real-time applications, is a crucial factor in determining system efficiency. Imagine two microservices, _Service A_ and _Service B_, each taking an average of 500ms to respond, inclusive of network latency. If the services are being called sequentially, the web service’s processing latency is 1 second, denoted as _W_. If we permit the web server to generate up to 2000 threads, our _L_ becomes 2000. By Little’s law, our system can manage:

<img src="https://latex.codecogs.com/svg.latex?\lambda=\frac{W}{L}=\frac{2000}{1}=2000" title="processing letency" />

requests per second before instability ensues. This seems sufficient, even accounting for traffic surges.

However, this holds true only when both _Service A_ and _Service B_ function optimally. If one’s latency spikes to 10 seconds, _W_ shifts from 1 second to approximately 10 seconds _(From W = 0.5 + 0.5 = 1 we’ve now gone to W = 0.5 + 10 = 10.5)_. Consequently, _λ_ drops from 2000 to 200 requests per second, which is suboptimal.

To make our service fault-tolerant, let’s set timeouts for the service calls — say we set our HTTP client’s timeout to 2 seconds. This ensures our maximum latency, even amidst failures, remains at 4 seconds, resulting in a _λ_ of 2000/4 = 500 requests per second.

We still have room for improvement. If _Service A_ consistently fails and times out, it’s inefficient to keep trying to connect to it, especially with a 2-second wait for each attempt. Instead, we can implement a “circuit breaker.” When _Service A_ fails, the circuit breaker activates, halting further attempts to connect. Periodically, a background task checks _Service A’s_ status. If it’s operational, the circuit breaker deactivates. This strategy can reduce our latency to less than 1 second and maintain our capacity at 2000 requests per second, even if failures occur. 

Additionally, some circuit breaker libraries allow for allocating specific thread pools for different tasks, ensuring a single malfunctioning operation doesn’t consume all available threads. This approach is known as “bulkheading” against failures.

Can we further reduce _W_? Indeed, if _Service A’s_ result isn’t a prerequisite for _Service B_, we can parallelize their calls. Using Futures _(Java)_ or Promises _(JS)_, we dispatch both requests simultaneously, potentially reducing _W_ from 1 second to 500ms. This principle extends to multiple service calls, allowing our server to manage up to 4000 requests per second, even with numerous microservice interactions.

Is this our peak performance? Barring significant optimizations to _Service A_ and _Service B_, it appears so. Even with underutilized hardware, 4000 requests per second is our upper limit, especially if any microservice latency exceeds 500ms. If this isn’t sufficient, what’s our next move?

### Optimizing Latency with Functional Callbacks

While we’ve managed to reduce _W_, _L_ remains limited by the OS’s thread-handling capacity. To increase _L_, we must move away from the thread-per-request model.

Enter **Node.js**, a server-side JavaScript framework. Given JavaScript’s single-threaded nature, Node.js bypasses the OS thread scheduler. Instead of allocating a thread for each request, it uses asynchronous callbacks. When a request handler needs to wait (e.g., for a service call), it provides a callback to execute upon completion. This approach capitalizes on JavaScript’s lack of threading, avoiding the OS thread limitations.

However, this method has its challenges. Any prolonged blocking of a handler function stalls the entire Node.js instance; and no other requests can be processed.This is often mitigated by running several Node instances on one machine and load-­balancing them, which also helps take advantage of all CPU cores. But it consumes more RAM and makes parallelizing certain computational tasks difficult. Moreover, the asynchronous, callback-based programming style can be intricate, leading to the infamous “callback hell.” Node.js tries to simplify this with “promises,” a more functional approach. 

A benefit of Node’s single-threaded nature is its simplicity. Even if callbacks from asynchronous calls like _Service A_ and _Service B_ can execute in any sequence, they run on the same thread, eliminating concurrency issues, like race condition, etc.

By sidestepping thread-based code flow, _L_ is no longer bound by the OS’s scheduling limits but by hardware capacity and framework overhead. The need for additional hardware arises only when the current hardware is maxed out.

<p class="three-dots">***</p>

The functional style appears promising, but it diverges from the intuitive nature of the thread-per-request model. While the functional approach provides scalability and fault tolerance, its code is often less straightforward than that of the thread-per-request model. Yet, is it impossible to combine the best of both worlds: the scalability and fault tolerance of the functional style with the clarity of the thread-per-request model? Fortunately, it’s not.

### Lightweight or User-mode Threads

So far, we have realised that the server’s capacity, denoted as _L_ in Little’s formula, is often limited by the OS’s thread scheduling capability. Traditional threads, being a limited resource, had to be capped at some relatively small number, leading to the adoption of complex solutions like circuit breakers and functional programming style. But what if threads were more efficient?

Languages like _Erlang_ and _Go_ provide lightweight threads _(Erlang’s processes and Go’s goroutines)_. Similarly, the relatively new OpenJDK’s _Project Loom_ introduces this functionality for Java 19 and later versions. These threads are managed by the language or library runtime, not the OS, allowing for more efficient scheduling.

Lightweight threads offer many advantages similar to traditional OS threads, including a straightforward control flow and the capability to pause and wait for resources, while permitting other threads to operate on the CPU. However, unlike traditional threads, lightweight threads are not managed by the operating system, leading to quicker context-switching and reduced system resource consumption. Consequently, a single machine can efficiently manage millions of these threads. This offers a distinct advantage. The runtime, having a deeper understanding of the thread’s purpose and behaviour, can often outperform the OS in scheduling decisions. It recognizes that these threads operate in short bursts and frequently block, a behaviour not typical of heavyweight threads. This knowledge allows the runtime to employ an _M:N_ scheduling model, where a larger number of lightweight threads _(M)_ are mapped onto a smaller number of OS threads _(N)_.

In essence, lightweight threads offer a path to maximize hardware efficiency without compromising code simplicity.

### Conclusion

As the world continues its relentless march towards digital ubiquity, ensuring the scalability and fault tolerance of web applications becomes non-negotiable. While hardware advancements are laudable, the true bottleneck often lies in the software, especially the OS’s thread management capabilities. By embracing functional programming, lightweight threads, and a thorough understanding of Little’s Law, developers and system administrators can unlock the full potential of their servers, ensuring optimal performance even under duress.

<small>References: this article is influenced by a <a href="https://inside.java/u/RonPressler/" target="_blank">series of presentations and articles</a> by _Ron Pressler (Tech lead, Project Loom)_</small>
