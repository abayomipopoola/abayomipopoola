import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase()
const capitalize = string =>
  string.replace(/\b([a-z])/g, w => w.charAt(0).toUpperCase() + w.slice(1))
const abbrevMonth = mo =>
  [mo.split(" ")[0].substring(0, 3), mo.split(" ")[1], mo.split(" ")[2]].join(
    " "
  )

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <h3 className="head-title">Recent posts</h3>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h4>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h4>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description,
                    }}
                    itemProp="description"
                  />
                  <span className="date-time">
                    {`${abbrevMonth(post.frontmatter.date)} · ${
                      post.timeToRead
                    } min read`}
                  </span>
                  <small>
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map(tag => {
                        return (
                          <span key={tag}>
                            <Link to={`/category/${kebabCase(tag)}`}>
                              <span className="tags-highlight">
                                {capitalize(tag)}
                              </span>
                            </Link>
                          </span>
                        )
                      })}
                  </small>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      
      <div style={{ float: "right" }}>
        <a style={{ boxShadow: "none" }} href="#top">
          <span>&#8593;</span> top
        </a>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
        }
      }
    }
  }
`
