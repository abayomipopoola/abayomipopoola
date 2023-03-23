import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase()
const capitalize = string =>
  string.replace(/\b([a-z])/g, w => w.charAt(0).toUpperCase() + w.slice(1))

const Tags = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = data.allMarkdownRemark.group

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Posts Tags" description="All posts by tag" slug="/tags" />
      <Bio />

      <h3 className="head-title">Posts Tags</h3>

      <ul style={{ listStyle: "none" }}>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/category/${kebabCase(tag.fieldValue)}/`}>
              {capitalize(tag.fieldValue)} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
