---
title: Principles of Product Development Flow pt. 1
date: "2023-02-27T11:15:40.284Z"
tags: [agile, books, product development]
description: Understanding product development as an example of a systematic process that we can model and improve upon.
slug: "principles-of-product-development-flow-pt-1"
coverImage: "./lean.jpg"
---

**The Principles of Product Development Flow** by Donald Reinertsen is a book on Lean Product Development that systematically applies various economic concepts, lean manufacturing, statistics, queuing theory, etc, to the product development process. Reinertsen organizes these theories into 8 main themes and outlines 175 principles to provide guidance for product development. Some of these principles include concepts such as reducing batch sizes, limiting work in progress, and enabling teams to make decisions.

The author places great emphasis on the importance of managing queues and argues that bottlenecks and queues often hinder the flow of work in the product development process. The book provides a thorough and in-depth method for managing product development processes, making it a valuable resource for anyone seeking to enhance the speed and efficiency of their product development efforts.

In the rest of this write-up, I'll give a brief overview of some important concepts covered in the book, and then take a more detailed look at managing queues, which is a crucial aspect of product development processes.

### The Principles of Product Development Flow

The concept of product development flow is built around the idea that a seamless and steady flow of work through the development process can enhance efficiency and minimize waste. The methodology seeks to remove bottlenecks, decrease cycle time, and accelerate product delivery.

#### The Economic View

The _Economic View_ described in the book is about making financially viable decisions throughout a product development process. This view recognizes that all product development activities have a cost, and the goal is to maximize the economic value created by the product while minimizing the cost of development.

Reinertsen argues that many product development organizations focus too much on reducing development costs, rather than understanding the economic impact of delays in the product development process. By taking an economic perspective, product development teams can make more informed decisions about the allocation of resources and trade-offs between speed, cost, and quality in order to maximize the economic value of the product.

Reinertsen points out that product developers often use proxy measurements that offer little or no economic connection with the marketplace.

> As Eric Ries puts it in his review <a href="http://www.startuplessonslearned.com/2009/07/principles-of-product-development-flow.html" target="_blank" class="read-more">_(here)_</a>: The goal [of the book] is to help us recognize that every artifact of our product development process is really just a proxy variable. Everything: schedules, efficiency, throughput, even quality. In order to trade them off against each other, we have to convert their impact into economic terms. They are all proxies for our real goal, maximizing an economic variable like profit or revenue. Therefore, in order to maximize the true productivity (aka profitability) of our development efforts, we need to understand the relationships between these proxy variables.

Two important points from this chapter:

- If you only measure one thing, measure the cost of delay
- Measure the work, never the worker

Most economic factors in product developement can be traced back to managing delay. Once we quantify the cost of delay, we become aware of the cost of queues.

Although, this does not mean that we should spend extensive effort and time on computing the economic value of everything in the product development process. Reinertsen argues that just getting close delivers almost all of the value of measurement with a fraction of the effort.

![batch sizes](./batch-economics.jpg)

The graph above shows a classic example of batch size optimization where two different types of costs interact: transaction costs and holding costs. The U-shaped Total Cost curve represents the sum of two competing factors:

- **_Transaction Cost:_** Decreases as batch size increases because fixed setup costs are distributed across more units. Each time you start a new batch, you incur costs regardless of size (e.g., equipment setup, admin overhead).
- **_Holding Cost:_** Increases linearly with batch size due to inventory storage expenses, capital tied up in work-in-progress, delayed feedback, and increased risk of obsolescence.

The optimal batch size occurs at the minimum point of the Total Cost curve, where marginal transaction savings equal marginal holding costs. However, as Reinertsen points out, we don't need perfect precision — getting reasonably close to the optimal point captures most of the economic benefits with significantly less measurement effort.

This principle applies broadly across product development decisions, including sprint length, feature bundling, and release frequency, where finding the balance between competing factors is essential for maximizing value.

#### Exploiting Variability

Variability refers to the differences and uncertainties inherent in product development processes. Rather than viewing variability as only a problem to eliminate, Reinertsen proposes a counterintuitive approach — strategically using variability as an advantage.

The key insight is that variability can be beneficial when:

- It creates opportunities for learning and innovation
- It allows for flexibility in responding to market changes
- It enables selective risk-taking that can yield outsized returns

For example, instead of rigidly controlling all process variations, teams can:

1. Identify which variations matter most economically
2. Apply statistical techniques to manage harmful variation
3. Deliberately introduce beneficial variation through experiments

![payoff function curve](./payoff.jpg)

The graph above illustrates how to evaluate variability using a payoff function. When outcomes vary, their economic value also varies. The curve shows that:

- **_Left side_**: Performance shortfalls below target create increasing costs — the further below target, the more severe the economic penalty
- **_Middle_**: Performance at the target level provides the baseline expected value
- **_Right side_**: Performance above target provides benefits, but with diminishing returns - each additional increment of performance delivers less additional value

Unlike financial options, product development payoff functions often have asymmetric risk profiles: downside costs can be unlimited while upside benefits eventually plateau.

To effectively manage variability, Reinertsen recommends:

- Using smaller tasks and time limits to reduce harmful variation
- Applying economic prioritization to focus on high-impact areas
- Implementing faster feedback cycles to detect problems early
- Tackling high-risk elements first when the cost of failure is lowest

This approach helps teams determine when adding features no longer makes economic sense - the point where marginal costs exceed marginal benefits. By quantifying the economic value of features, teams can make data-driven decisions about what to include in the final product.

#### Enable Smaller Batches

This principle is based on the idea that smaller batches can help reduce the cost of delay, increase flow efficiency, and ultimately improve the overall quality of the product development process.

Enabling smaller batches means breaking down the development process into smaller units of work, which can be completed in a shorter time frame. Instead of waiting to complete an entire project before releasing it, teams can release smaller batches of work more frequently, allowing for quicker feedback and the ability to make adjustments based on that feedback.

![batch sizes](./batch-sizes.jpg)

Big iterations require big queues. Reducing batches can have many benefits in a software development environment. Here is an example pulled from the book for the testing portion of software development.

![software development](./software-dev.jpg)

The batch size chapter reiterates the concepts of Agile or Lean principles: colocation, short iterations, low hanging fruit, and modular design are all discussed. While none of these ideas is new, it is valuable to read about them in the context of maximizing economic value.

#### Applying WIP Constraints

The chapter discusses how costs can be minimized by controlling work-in-progress. Detailed planning and control of tasks are costly. It is more effective to control the work in process between major functions.

This principle is inspired by lean manufacturing concepts such as the <a href="https://www.abayomipopoola.com/toyota-case-of-lean-product-development/" target="_blank">Toyota Production System</a> and the Theory of Constraints, which emphasize the importance of optimizing the flow of work to achieve maximum efficiency and quality.

By managing the flow of products, teams can identify bottlenecks and areas of inefficiency, and work to minimize the work in progress (WIP) at each stage of the process. This can be achieved through various scheduling, prioritization, resource allocation, and recovery strategies.

For example, teams can use Kanban boards to visualize the flow of work and limit the amount of WIP at each stage, ensuring that work is completed in a timely manner and that resources are not overburdened. Prioritization strategies can also be used to ensure that high-priority tasks are completed first, minimizing delays and improving the overall flow of work.

Resource allocation is another important strategy for managing the flow of products. By allocating resources effectively, teams can ensure that each stage of the process has the necessary resources to complete work efficiently and on time. This may involve adjusting staffing levels, investing in new tools or technologies, or outsourcing certain tasks to external vendors.

By limiting the amount of work-in-progress, organizations can improve flow and ensure that work moves through the system quickly and efficiently. This helps to reduce the time it takes for work to move through the system and improve the overall efficiency of the development process.

#### Controlling Flow Under Uncertainty

Reinertsen discusses how to manage product development flow despite inherent uncertainties. Traditional rigid project management tools like detailed Gantt charts prove inadequate when facing unpredictable market changes, technical challenges, and resource fluctuations.

Instead, he advocates for a more adaptive approach built on:

- Creating flexible systems that can respond to emerging information
- Managing bottlenecks to prevent work stoppages
- Building strategic buffers (slack) at critical points in the process
- Using real-time metrics to detect flow problems early

> As Reinertsen summarizes: "The flow of activities through product development can be managed. Use forecasts and share information between adjacent stages. Use cadence to set routine start/stop times. Sequence tasks and change priorities based upon risk and incremental economic value added."

This approach transforms uncertainty from a threat into a manageable aspect of product development, allowing teams to maintain flow even when conditions change unexpectedly.

#### Accelerate Feedback

This chapter focuses on the importance of gathering and utilizing feedback throughout the product development process. Reinertsen argues that traditional methods of product development, which involve lengthy planning cycles and a focus on execution, often lead to a lack of feedback and can result in wasted effort and resources. Reinertsen suggests that a better approach involves accelerating feedback loops, both within the development team and with customers and stakeholders.

By accelerating feedback loops, product development teams can quickly identify and address problems, make better decisions and reduce the risk of delays or failures. The chapter discusses various techniques for accelerating feedback, such as using prototyping, simulation, and experimentation.

The chapter also covers topics such as the importance of creating a culture that values feedback and the role of metrics and measurement in facilitating feedback loops. The goal is to create a product development process that is agile, flexible, and responsive to feedback, resulting in better products and improved outcomes.

> Develop rapid feedback systems. Employ early warning systems and value at risk triggers to escalate reviews. Align activities through training, incentives, and templates. Adjust decisively when required. Use frequent communication to build teams and short queues to build urgency. Employ flow metrics.

<p class="three-dots">***</p>

You just completed the first part of the _The Principles of Product Development Flow_ blog post. <a href="/principles-of-product-development-flow-pt-2" class="read-more">_(Read the concluding part here)_</a>

<small>References: <a href="https://www.amazon.com/gp/product/1935401009" target="_blank">The Principles of Product Development Flow by Donald Reinertsen</a>
</small>
