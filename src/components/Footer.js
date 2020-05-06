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
        <div style={{ clear: 'both' }}/>
        <div style={{ float: 'left' }}>
          <a href="https://twitter.com/abayomipopoola" target="_blank">
            Twitter
          </a>
          {' '} &bull; {' '}
          <Link style={{ boxShadow: 'none' }} to='/me'>
            View My Portfolio{' '}<span>&#187;</span>
          </Link>
        </div>
        <div style={{ float: 'right' }}>
          <Link style={{ boxShadow: 'none' }} to='/'>
            <span>&#8593;</span>{' '}top
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
