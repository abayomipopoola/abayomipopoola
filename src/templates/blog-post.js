import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Disqus from 'gatsby-plugin-disqus'
import SEO from '../components/Seo'
import Share from '../components/Share'

const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
const capitalize = string => string.replace(/\b([a-z])/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));

const BlogPostTemplate = ({ data, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const { previous, next } = data
	const siteSlug = post.fields.slug
	const siteUrl = data.site.siteMetadata.siteUrl
	const twitterHandle = data.site.siteMetadata.social.twitter

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.spoiler}
				slug={post.fields.slug}
			/>
			<article
				className="blog-post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header>
					<h2 itemProp="headline">{post.frontmatter.title}</h2>
					<p style={{ color: '#5A5A5A', margin: '16px 0', fontSize: 13}}>
						{post.frontmatter.date} · {post.timeToRead} min read
					</p>
				</header>
				<section className='post'
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
				/>
				<p>
					{post.frontmatter.tags &&
						post.frontmatter.tags.map((tag) => {
						return (
							<span key={tag}>
								<Link to={`/category/${kebabCase(tag)}`}>
									<span className="tags-highlight">{capitalize(tag)}</span>
								</Link>
							</span>
						);
					})}
				</p>
				<Share
					socialConfig={{
						twitterHandle,
						config: {
							url: `${siteUrl+siteSlug}`,
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
			<section className="subscribe-section">
				<div className="card card--subscribe align--center txt--x-small">
					<form action="https://world.hey.com/abayomi/subscribers" accept-charset="UTF-8" data-remote="true" method="post">
						<label for="subscriber[email_address]" className="flush--top push_quarter--bottom txt--bold">
							Subscribe below to get future posts
						</label>
						<div className="flex u-full-width push_half--top">
							<input type="email" name="subscriber[email_address]" placeholder="Type your email…" required="true" className="subscribe__email input input--full-width input--borderless unpad flex-item--grow" />
							<button className="subscribe__submit btn--plain txt--x-small">Subscribe</button>
						</div>
					</form>
					<p className="txt--x-small flush--bottom">
					Or grab the <a className="permalink" href="https://world.hey.com/abayomi/feed.atom">RSS feed</a>
					</p>
				</div>
			</section>

			<div className="comments-divider"><span className="comments-divider-innerr">&nbsp;</span></div>
			{/* <Disqus
				identifier={post.id}
				title={post.frontmatter.title}
				url={`${siteUrl+siteSlug}`}
			/> */}
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
      html
      timeToRead
	  fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
		tags
		spoiler
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
