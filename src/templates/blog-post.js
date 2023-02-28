import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase()
const capitalize = string =>
  string.replace(/\b([a-z])/g, w => w.charAt(0).toUpperCase() + w.slice(1))

  const BlogPostTemplate = ({
    data: { previous, next, site, markdownRemark: post },
    location,
  }) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const siteUrl = site.siteMetadata.siteUrl
  const twitterHandle = site.siteMetadata.social.twitter
  const siteSlug = post.fields.slug

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
          <div class="metainfo-grid">
            <div class="grid-child">
              <p style={{ color: "#202123", margin: "0 0 16px 0", fontSize: 12 }}>
                {post.frontmatter.date} · {post.timeToRead} min read
              </p>
            </div>
            <div class="grid-child share-btn">
              <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${siteUrl + siteSlug}`,
                    title: post.frontmatter.title,
                  },
                }}
              />
            </div>
          </div>
        </header>
        <section
          className="post"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <div class="metainfo-grid">
          <div class="grid-child">
            <p>
              {post.frontmatter.tags &&
                post.frontmatter.tags.map(tag => {
                  return (
                    <span key={tag}>
                      <Link to={`/category/${kebabCase(tag)}`}>
                        <span className="tags-highlight">{capitalize(tag)}</span>
                      </Link>
                    </span>
                  )
                })}
            </p>
          </div>
          <div class="grid-child share-btn">
            <Share
              socialConfig={{
                twitterHandle,
                config: {
                  url: `${siteUrl + siteSlug}`,
                  title: post.frontmatter.title,
                },
              }}
            />
          </div>
        </div>
        <hr />
        {/*<footer>*/}
        {/*	<Bio />*/}
        {/*</footer>*/}
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <section className="subscribe-section">
        <div className="card card--subscribe align--center txt--x-small">
          <form
            action="https://world.hey.com/abayomi/subscribers"
            accept-charset="UTF-8"
            data-remote="true"
            method="post"
          >
            <label
              for="subscriber[email_address]"
              className="flush--top push_quarter--bottom txt--bold"
            >
              Subscribe below to get future posts
            </label>
            <div className="flex u-full-width push_half--top">
              <input
                type="email"
                name="subscriber[email_address]"
                placeholder="Type your email…"
                required="true"
                className="subscribe__email input input--full-width input--borderless unpad flex-item--grow"
              />
              <button className="subscribe__submit btn--plain txt--x-small">
                Subscribe
              </button>
            </div>
          </form>
          <p className="txt--x-small flush--bottom">
            Or grab the{" "}
            <a
              className="permalink"
              href="https://world.hey.com/abayomi/feed.atom"
            >
              RSS feed
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description}
	    slug={post.fields.slug}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
