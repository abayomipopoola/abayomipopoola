import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

class CvPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/'>
          <span>&#8592;</span>{' '}back
          </Link>
        </div>
        <h1>My Résumé</h1>

        <div>
            <div className="flex-container">
                <img width='100%' src="https://www.dropbox.com/s/ej8qm2ijg18mvsk/0001.jpg?raw=1" alt="resume page 1" />
            </div>
        </div>

        <div>
            <div className="flex-container">
                <img width='100%' src="https://www.dropbox.com/s/ny8lryk78f12s1b/0002.jpg?raw=1" alt="resume page 2" />
            </div>
        </div>

        <div>
            <div className="flex-container">
                <img width='100%' src="https://www.dropbox.com/s/83qp4glpulippd4/0003.jpg?raw=1" alt="resume page 3" />
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

export default CvPage
