import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div id="not-found">
          <div class="fof">
            <h1>Page Not Found: 404</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
