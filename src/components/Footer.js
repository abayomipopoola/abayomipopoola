import React from 'react'

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
          <a
            href="http://getinformed.com.ng/ap"
            target="_blank"
            rel="noopener noreferrer"
          >portfolio</a>
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
