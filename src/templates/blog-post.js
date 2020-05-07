import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Disqus from 'gatsby-plugin-disqus'
import { rhythm, scale } from '../utils/typography'
import Share from '../components/Share';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const twitterHandle = this.props.data.site.siteMetadata.twitterHandle
    const siteDescription = post.excerpt
    const { previous, next, slug } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <main>
          <article>
            <header>
              <h1
                style={{
                  fontFamily: 'Libre Baskerville, georgia, times, serif',
                  color: '#121212',
                }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: 'block',
                  color: '#999999',
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                {`${post.frontmatter.date} · ${post.timeToRead} min read`}
              </p>
            </header>
            <div className='post' dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer>
              <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${siteUrl+slug}`,
                    title: post.frontmatter.title,
                  },
                }}
              />
            </footer>
          </article>
        </main>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <h3
          style={{
            fontFamily: 'Libre Baskerville, georgia, times, serif',
            marginTop: rhythm(0.25),
          }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#326891',
            }}
            to={'/'}
          >
            Abayomi Popoola
          </Link>
        </h3>
        <Bio />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            marginTop: rhythm(-2),
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
        <Disqus
          identifier={post.id}
          title={post.frontmatter.title}
          url={`${siteUrl+slug}`}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        twitterHandle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
