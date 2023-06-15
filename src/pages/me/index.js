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
        My name is Abayomi, a programmer and entrepreneur with a passion for business development. 
        I'm a results-oriented engineer specializing in designing and building highly scalable, resilient, and distributed systems.
      </p>
      <p>
        When I'm not hands-on setting the technology strategy and ensuring intense execution for fintech startups in Lagos, 
        you can find me working remotely.
      </p>
      <p>
        Most recently, I was the Director of Engineering at{" "}
        <a href="https://www.dot.ai/" target="_blank" rel="noreferrer">
          Dot
        </a>
        , a Lagos-based startup democratising financial services by providing digital banking tools for 
        underserved consumers in emerging markets.
      </p>

      <p>
        You can also shoot me <a href="mailto:abayomi@hey.com" target="_blank" rel="noreferrer">an email</a>.
      </p>
      <p>
        <a href="https://www.linkedin.com/in/abayomipopoola/" target="_blank" rel="noreferrer">LinkedIn</a> profile.
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
