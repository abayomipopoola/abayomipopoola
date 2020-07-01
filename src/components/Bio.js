import React from 'react'

// Import typefaces
import 'typeface-libre-baskerville'
import 'typeface-noto-serif'

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
            borderRadius: '50%',
          }}
        />
        <p style={{ color: '#333333'}}>
          I write about topics I find interesting—mostly things that are worth sharing.
          A contriver.{' '}
          <a href="https://twitter.com/abayomip_" target="_blank">
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
