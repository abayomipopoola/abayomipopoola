import React from 'react'

import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/me'>
          view my portfolio{' '}<span>&#187;</span>
          </Link>
        </div>
        <a
          href="https://mobile.twitter.com/abayomipopoola"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </footer>
    )
  }
}

export default Footer
