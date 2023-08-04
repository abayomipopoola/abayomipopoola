import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpeg"
        width={60}
        height={60}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          {author?.summary || null}
          {` `}
          <Link style={{ boxShadow: "none" }} to="/me">
            <span className="about-link">about</span>
          </Link>
          &nbsp;&#183;&nbsp;
          <Link style={{ boxShadow: "none" }} to="/tags">
            <span className="about-link">tags</span>
          </Link>
          &nbsp;&#183;&nbsp;
          <a
            href="https://medium.com/@abayomip"
            target="_blank"
            rel="noreferrer"
          >
            <span className="about-link">medium</span>
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
