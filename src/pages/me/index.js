import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "My Portfolio" }]}
          title="My Portfolio"
        />
        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/'>
          <span>&#8592;</span>{' '}back
          </Link>
        </div>
        <h2>Hello!</h2>
        <p>
			My name is Abayomi, a programmer and entrepreneur who loves building businesses.
        </p>
        <p>
      I've got 7+ years of experience in building solutions for highly scalable enterprise systems. I also provide project planning and management for established initiatives within a company; and ensure that projects are completed to specification, within an established time frame and budget.
        </p>
        <p>
			Please feel free to view my <a href="/cv">résumé</a>.
        </p>

        <p>
			You can also shoot me <a href="mailto:abayomi@hey.com">an email</a>.
        </p>

        <div>
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
        </div>

        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/me'>
          <span>&#8593;</span>{' '}top
          </Link>
        </div>
      </Layout>
    )
  }
}

export default PortfolioPage
