import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

import project1 from './project-1.png'
import project2 from './project-2.png'
import project3 from './project-3.png'
import project4 from './project-4.png'
import project5 from './project-5.png'
import project6 from './project-6.png'

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/'>
          <span>&#8592;</span>{' '}back
          </Link>
        </div>
        <h2>Hello!</h2>
        <p> My name is Abayomi, a software engineering manager, and a wannabe economist that dabbles in entrepreneurship.
            I help bootstrap software products that scale.
        </p>
        <p> Welcome to my portfolio! Here is a collection of
            my selected projects. Please feel free to send <a href="mailto:abayomip@hey.com">an email</a>
        </p>

        <p> You can also view my <a href="/cv">résumé</a>
        </p>

        <div>
            <h3>Latest Projects</h3>
            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                            TimeMap
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <p>TimeMap is a tracking system that tells you when, where and what your employees are working on.
                           Effectively track Your business field activities.</p>
                        <p>
                            <a href="https://timemap.rovedana.com" target="_blank">view project <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
                <div className="flex-item">
                    <img className="project-image" width='100%' src={project6} alt="TimeMap web app" />
                </div>
            </div>

            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                            TimeMap mobile app.
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <p>The mobile app works with the TimeMap tracking system for effective tracking of business activities; it allows employees to capture an attendance instance on the go.</p>
                        <p>
                            <a href="https://play.google.com/store/apps/details?id=com.timeMap" target="_blank">view project <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
                <div className="flex-item">
                    <img className="project-image" width='100%' src={project5} alt="TimeMap mobile app" />
                </div>
            </div>

            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                            #FCMBFlexxtern Contest
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <p>Flexxtern is a video contest.
                        Participants are required to upload a 45-sec video on why they should be the next #flexxtern;
                        they also are asked to invite friends to vote.</p>
                        <p>
                            <a href="https://apply.fcmb.com/flexxtern" target="_blank">view project <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
                <div className="flex-item">
                    <img className="project-image" width='100%' src={project4} alt="#FCMBFlexxtern Contest" />
                </div>
            </div>

            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                            #FlexxCareerSeries
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <p>A capacity building initiative in form of short videos tagged "#FlexxCareerSeries".
                        In the series, young Flexxers get a chance to listen to top-notch HR professionals from
                        leading Nigerian firms to provide guidance on how to prepare throughout the job application process.</p>
                        <p>
                            <a href="http://flexxzone.fcmb.com/flexxcareers" target="_blank">view project <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
                <div className="flex-item">
                    <img className="project-image" width='100%' src={project3} alt="FlexxCareerSeries" />
                </div>
            </div>

            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                            Greyfield Realty
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <p>Greyfield Realty is a web application for commercial and residential real estate services organization based out of Lagos, Nigeria.</p>
                        <p>
                            <a href="http://greyfieldrealty.com" target="_blank">view project <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
                <div className="flex-item">
                    <img className="project-image" width='100%' src={project2} alt="Greyfield Realty" />
                </div>
            </div>

            <div className="flex-container">
                <div className="ant-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                            MOB website
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <p>Worked on the UX and UI overhaul of the website.</p>
                        <p>
                            <a href="http://mobintegrated.com" target="_blank">view project <span>&#187;</span></a>
                        </p>
                    </div>
                </div>
                <div className="flex-item">
                    <img className="project-image" width='100%' src={project1} alt="MOB website" />
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
