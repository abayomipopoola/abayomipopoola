import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Disqus from "gatsby-plugin-disqus"
import SEO from "../components/Seo"
import Share from "../components/Share";

const BlogPostTemplate = ({ data, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const { previous, next, slug  } = data
	const siteUrl = data.site.siteMetadata.siteUrl
	const twitterHandle = data.site.siteMetadata.social.twitter

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.excerpt}
			/>
			<article
				className="blog-post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header>
					<h1 itemProp="headline">{post.frontmatter.title}</h1>
					<p style={{ color: '#999999', margin: '16px 0', fontSize: 13}}>
						{post.frontmatter.date} · {post.timeToRead} min read
					</p>
				</header>
				<section className='post'
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
				/>
				<Share
					socialConfig={{
						twitterHandle,
						config: {
							url: `${siteUrl+slug}`,
							title: post.frontmatter.title,
						},
					}}
				/>
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
			<hr />
			<Disqus
				identifier={post.id}
				title={post.frontmatter.title}
				url={`${siteUrl+slug}`}
			/>
		</Layout>
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
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
