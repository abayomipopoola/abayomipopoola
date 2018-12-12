import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Abayomi Popoola`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Abayomi Popoola</strong> who lives and works in Lagos
          building amazing things.{' '}
          <a href="https://twitter.com/abayomipopoola" target="_blank">
            Twitter
          </a>
          {' '} &bull; {' '} 
          <Link style={{ boxShadow: 'none' }} to='/me'>
            View My Portfolio{' '}<span>&#187;</span>
          </Link>
        </p>
      </div>
    )
  }
}

export default Bio
