import React from "react"
import Bio from "../../components/bio"
import Seo from "../../components/seo"
import Layout from "../../components/layout"

const PortfolioPage = ({ location }) => {
  return (
    <Layout location={location} title="Abayomi Popoola">
      <Seo
        title="About & Contact"
        description="A bit about Abayomi Popoola"
        slug="/me"
      />
      <Bio />

      <h3 className="head-title">Hello!</h3>
      <p>
        I'm Abayomi, a programmer and entrepreneur who loves building
        businesses.
      </p>
      <p>
        I am a result-driven engineer with extensive experience in building and
        designing highly scalable, resilient, distributed systems. I set
        technology strategy, and ensure intense executions.
      </p>
      <p>
        I lead engineering efforts at{" "}
        <a href="https://www.dot.ai/" target="_blank" rel="noreferrer">
          Dot
        </a>
        , a startup that's democratising financial services with digital banking
        tools for underserved consumers in emerging markets.
      </p>
      <p>
        Please feel free to view my <a href="/cv">résumé</a>.
      </p>

      <p>
        You can also shoot me <a href="mailto:abayomi@hey.com">an email</a>.
      </p>

      <div style={{ float: "right" }}>
        <a style={{ boxShadow: "none" }} href="#top">
          <span>&#8593;</span> top
        </a>
      </div>
    </Layout>
  )
}

export default PortfolioPage
