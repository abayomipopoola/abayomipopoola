import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Bio from '../../components/Bio'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Abayomi Popoola">
        <SEO 
          title="About & Contact" 
          description="A bit about Abayomi Popoola"
          slug="/me" 
        />
        <Bio />

        <h3><em>Hello!</em></h3>
        <p>
			My name is Abayomi, a programmer and entrepreneur who loves building businesses.
        </p>
        <p>
      I've got 8+ years of experience in building solutions for highly scalable enterprise systems. 
      I also provide project planning and management for established initiatives within a company; 
      and ensure that projects are completed to specification, within an established time frame and budget.
        </p>
        <p>
        I’m currently the Director of Engineering at  <a href="https://www.dot.limited/" target="_blank" >Dot</a>, 
        a startup that's democratising financial services with digital banking tools for underserved consumers in emerging markets.
        </p>
        <p>
			Please feel free to view my <a href="/cv">résumé</a>.
        </p>

        <p>
			You can also shoot me <a href="mailto:abayomi@hey.com">an email</a>.
        </p>

        {/* <div>
            <h3>Bytecreatives</h3>
            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-body">
                        <p>
							Building a successful product can be tough. Bytecreatives is a software consultancy solving complex problems with technology.
							We take pride in executing your ideas by connecting strategy & execution.
                        </p>
                        <p>
                            <a href="https://www.bytecreatives.com/" target="_blank">Visit Bytecreatives <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div> */}

        <div style={{ float: 'right' }}>
        <a style={{ boxShadow: 'none' }} href="#top">
            <span>&#8593;</span>{' '}top
          </a>
        </div>
      </Layout>
    )
  }
}

export default PortfolioPage
