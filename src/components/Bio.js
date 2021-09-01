import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

import Image from "gatsby-image"

const Bio = () => {
	const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

	// Set these values by editing "siteMetadata" in gatsby-config.js
	const author = data.site.siteMetadata?.author
	const social = data.site.siteMetadata?.social

	const avatar = data?.avatar?.childImageSharp?.fixed

	return (
		<div className="bio">
			{avatar && (
				<Image
					fixed={avatar}
					alt={author?.name || ``}
					className="bio-avatar"
					imgStyle={{
						borderRadius: `50%`,
					}}
				/>
			)}
			{author?.name && (
				<p>
					{author?.summary || null}
					{` `}
					<Link style={{ boxShadow: 'none' }} to='/me'>
						<em><span>&#187;</span>{' '}About & Contact</em>
					</Link>
					{` `}&bull;{` `}
					<Link style={{ boxShadow: 'none' }} to='/tags'>
						<em>Posts Tags</em>
					</Link>
				</p>
			)}
		</div>
	)
}

export default Bio
