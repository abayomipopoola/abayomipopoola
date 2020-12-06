import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

const Wrapper = styled.div`
  #objective {float: left; }
  #objective p {font-style: italic; color: #666; }
`;
const H2 = styled.h2`
  font-size: 16px;
  margin: 0 0 6px 0;
  padding-top: 10px;
  position: relative;
  span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-style: italic;
    font-size: 16px;
    color: #999;
    font-weight: normal;
  };
  @media only screen and (max-width: 600px) {
  span {
    position: relative;
  }
}
`;
const P = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
`;
const Ps = styled.p`
  font-size: 12px;
  padding: 0 5px;
  margin: 0 0;
`;
const A = styled.a`
  color: #999;
  text-decoration: none;
  border-bottom: 1px dotted #999;
  &:hover {
    border-bottom-style: solid; color: black;
  }
`;
const Ul = styled.ul`
   margin: 0 0 32px 17px;
   font-size: 14px;
`;
const Dt = styled.dt`
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  padding: 0 26px 0 0;
  width: 100%
  border-bottom: 1px solid #999;
`;
const Dd = styled.dd`
  .flex-wrapper {
    float: right;
    display: flex;
    margin: 15px;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
`;

class CvPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "My CV" }]}
          title="My CV"
        />
        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/'>
          <span>&#8592;</span>{' '}back
          </Link>
        </div>
        <h2>Abayomi Popoola</h2>

        <Wrapper>

          <div id="contact-info" class="vcard">
              <H2>Snr. Software Engineer/Manager</H2>
              <P>
                  Cell: <A class="tel" href="tel:+2348073782117">+234 807 378 2117</A><br />
                  Email: <A class="email" href="mailto:abayomi@hey.com">abayomi@hey.com</A>
              </P>
          </div>

          <div id="objective">
              <P>
                  I am a result-driven engineer with 6+ years experience in building solutions for highly scalable enterprise systems. I also provide project planning and management for established initiatives within a company; and ensure that projects are completed to specification, within an established time frame and budget.
              </P>
          </div>

          <dl>

              <Dt>Skills Summary</Dt>
              <Dd>
                  <div class='flex-wrapper'>
                    <div class='row'>
                      <div class='column'>
                        <div>
                          <strong>Web Dev.</strong>
                          <Ps>
                            HTML5 & CSS3, Bootstrap, JavaScript, ES6, FlowJS, ReactJS & Redux, React Native, Webpack.
                          </Ps>
                        </div>
                      </div>
                      <div class='column'>
                        <div>
                          <strong>Backend</strong>
                          <Ps>
                            Java, Golang, JavaScript, Node.js, Python, Scala, Spring, Dropwizard. RESTfull API with HATEOAS, SOA & Microservices. Maven & Gradle, Testing, CI, Docker and Kubernetes.
                          </Ps>
                        </div>
                      </div>
                      <div class='column'>
                        <div>
                          <strong>Data Stores</strong>
                          <Ps>
                            MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch.
                          </Ps>
                        </div>
                      </div>
                      <div class='column'>
                        <div>
                         <strong> Web Servers</strong>
                          <Ps>
                            Apache Tomcat, Jetty, Nginx, Amazon Web Services, Apache Kafka.
                          </Ps>
                        </div>
                      </div>
                      <div class='column'>
                        <div>
                          <strong>Project Mgt.</strong>
                          <Ps>
                            Agile/Scrum & Kanban, Resource planning & Scheduling, Requirement gathering, Proficient communicator.
                          </Ps>
                        </div>
                      </div>
                    </div>
                  </div>
              </Dd>

              <Dt>Experience</Dt>
              <Dd>
				  <H2>The Linux Foundation <span>Senior Software Engineer – Oct, 2020 - Present</span></H2>
				  <P>
					  The Linux Foundation is a nonprofit organization enabling mass innovation through open source.
				  </P>
				  <Ul>
					  <li>Working remotely as a core engineer working on a collection of products and services to help the open-source community.</li>
				  </Ul>

                  <H2>Kudi.com <span>Software Engineering Manager – Jan, 2020 - Aug, 2020</span></H2>
                  <P>
                    Kudi.com is a financial technology company that is enabling Africans to send money/pay bills through digital channels, viz, messaging app., mobile, web, USSD, and also through an Agent network.
                  </P>
                  <Ul>
                      <li>Responsible for ensuring that all engineering activity is managed through the lifecycle of product development, from detailed requirement generation, development, and integration right to customer validation.</li>
                      <li>I also double as the platform tech lead, with a team of seven engineers and a PM.</li>
                  </Ul>

                  <H2>Kudi.com <span>Platform Tech Lead – Jul, 2019 - Aug, 2020</span></H2>
                  <Ul>
                      <li>I led the platform engineering team. I was responsible for leading the technical design of systems and services.</li>
                      <li>I provide project planning and management for established initiatives within the company.</li>
                      <li>I ensured projects were completed to specification, within an established time frame.</li>
                      <li><strong>Technologies</strong>: Agile/Scrum, Jira, Java, Spring, Dropwizard, Golang, NodeJS, Mongo, Apache Kafka, Nginx, Docker & Kubernetes, AWS.</li>
                  </Ul>

                  <H2>Kudi.com <span>Senior Platform Engineer – Jan, 2019 - Jun, 2019</span></H2>
                  <Ul>
                      <li>Designed and architected software applications; built applications in an agile environment using Domain-driven and Test-driven development approach.</li>
                      <li>Utilised the speed and effectiveness of Apache Kafka to scale transactions in a fault-tolerant manner.</li>
                      <li><strong>Technologies</strong>: Java, Spring, Dropwizard, Golang, NodeJS, Python, Mongo, Apache Kafka, Nginx, Docker & Kubernetes, AWS.</li>
                  </Ul>

                  <H2>Jobberman.com <span>Head of Engineering – Dec, 2017 - Sep, 2018</span></H2>
                  <P>
                    Jobberman is an online career portal from Nigeria. They connect employers to employees seeking job opportunities.
                  </P>
                  <Ul>
                      <li>Head team of developers and system admin in maintaining and deploying new features on both Jobberman (Nigeria & Ghana) platforms.</li>
                      <li>Designed and coded application in an agile environment utilising a test-driven development approach.</li>
                      <li>Development and maintenance of search service using Elasticsearch. Rest API development and performance improvements. Ensure application security for all Jobberman websites and web services. Ensure rapid deployment of bug fixes. Deployment of products and features across countries (Nigeria & Ghana).</li>
                      <li>Handling platform infrastructure and servers management and administration. DevOps, continuous integration, enforcing testing and code review.</li>
                      <li>Reduced AWS cost by optimising codes thereby reducing the amount of compute cost.</li>
                      <li><strong>Technologies</strong>: PHP, Laravel, Java, Python, MySQL, Nginx, Elasticsearch, AWS.</li>
                  </Ul>

                  <H2>Ringer One Africa Media <span>Senior Software Engineer – Jul, 2017 - Dec, 2018</span></H2>
                  <P>
                    ROAM operates and grows leading marketplaces in Sub-Saharan Africa, they provide an online marketplace that provide thousands of buyers and sellers with an avenue to meet and exchange goods and services.
                  </P>
                  <Ul>
                      <li>Worked remotely with the Jobs core team of ROAM, supporting Jobberman (NG & GH) and Brightermonday (KE, UG & TZ)</li>
                      <li>Designed and coded application in an agile environment utilising a test-driven development approach.</li>
                      <li>I worked on the backend, supporting a multi-domain system, and helping to scale it across Africa.</li>
                      <li>Integrated elasticsearch functionality to the existing Talent search module; this creates a better search experience, as it's used on a large pool of data.</li>
                      <li>Integrated Xero accounting software with the system; this helps the accounting department for easy account reconciliation</li>
                      <li><strong>Technologies</strong>:  PHP, Laravel, Java, Python, MySQL, Nginx, Elasticsearch, PHPUnit & Behat testsuits, AWS.</li>
                  </Ul>

                  <H2>Jobberman.com <span>Lead Software Engineer – Jan, 2019 - Jun, 2019</span></H2>
                  <P>
                    Engineered software products, handling complex analysis and core programming to meet project requirements of new products.
                  </P>
                  <Ul>
                      <li>Designed and coded application in an agile environment utilising a test-driven development approach.</li>
                      <li>Full stack development.</li>
                      <li>Maintaining an existing codebase, also refactoring old code structure.</li>
                      <li>Setup a continuous integration development system using Jenkins.</li>
                      <li><strong>Technologies</strong>: PHP, Laravel, Java, Python, MySQL, Nginx, Elasticsearch, Jenkins, AWS.</li>
                  </Ul>

                  <H2>Teamapt.com <span>Software Engineer – Dec, 2015 - Aug, 2016</span></H2>
                  <P>
                    TeamApt is a financial technology company focused on developing digital banking/business solutions, and payments infrastructure.
                  </P>
                  <Ul>
                      <li>Led programming tasks including developments, enhancements, maintenance and support for clients’ applications.</li>
                      <li>Designed and built Kano State Electronic Tax/Revenue Tracking & Payment System.</li>
                      <li>Managed Kano State Electronic Tax/Revenue Tracking & Payment System server infrastructure.</li>
                      <li>Help a team that developed an Analytic System for Access Bank PLC’s Treasury.</li>
                      <li><strong>Technologies</strong>:  Java, MySQL, AngularJS 1, Linode cloud hosting.</li>
                  </Ul>

                  <H2>Seamfix.com <span>Software Engineer – Oct, 2014 - Nov, 2015</span></H2>
                  <P>
                    Seamfix is a software company that build solutions across sectors such as telecommunications, energy, retail / service businesses, universities & colleges, schools, health and the public (government) sector.
                  </P>
                  <Ul>
                      <li>Worked with my team lead to developed ‘Airtel KYC (Know Your Customer) Live Analytics’.</li>
                      <li>Worked in a team of 5 that built ‘MTN SmartClient SIM Card Registration Application’.</li>
                      <li>Worked in a team of 4 on ‘YARAGU Gas delivery application’.</li>
                      <li><strong>Technologies</strong>:  Java, MySQL, AngularJS 1, Wicket.</li>
                  </Ul>
              </Dd>

              <Dt>Education</Dt>
              <Dd>
                <H2>B.SC | Obafemi Awolowo University | Osun, Nigeria <span>2008 – 2013</span></H2>
              </Dd>

              <Dt>Profile</Dt>
              <Dd><Ul>
                      <li>Personal Website: <A href="#">abayomipopoola.com</A></li>
                      <li>LinkedIn: <A href="https://www.linkedin.com/in/abayomipopoola/" target="_blank">linkedin.com/in/abayomipopoola</A></li>
                      <li>Twitter:  <A href="https://twitter.com/abayomipopoola" target="_blank">twitter.com/abayomipopoola</A></li>
                      <li>Github: <A href="https://github.com/abayomipopoola" target="_blank">github.com/abayomipopoola</A></li>
                  </Ul>
              </Dd>
          </dl>

        </Wrapper>

        <div style={{clear: 'both'}}></div>

        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/cv'>
          <span>&#8593;</span>{' '}top
          </Link>
        </div>
      </Layout>
    )
  }
}

export default CvPage
