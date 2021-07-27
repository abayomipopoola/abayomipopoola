import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

	if (posts.length === 0) {
		return (
			<Layout location={location} title={siteTitle}>
				<SEO title="All posts" />
				<Bio />
				<p>
					No blog posts found.
				</p>
			</Layout>
		)
	}

    return (
		<Layout location={location} title={siteTitle}>
		<SEO title="All posts" />
		<Bio />
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
								<h3>
									<Link to={post.fields.slug} itemProp="url">
										<span itemProp="headline">{title}</span>
									</Link>
								</h3>
							</header>
							<section>
								<p
									 style={{ color: '#555555'}}
									dangerouslySetInnerHTML={{
										__html: post.frontmatter.spoiler
									}}
									itemProp="description"
								/>
								<small style={{ color: '#999999'}}>
									{`${post.frontmatter.date} · ${post.timeToRead} min read`}
								</small>
								<small>
									{post.frontmatter.tags &&
										post.frontmatter.tags.map((tag) => {
										return (
											<span key={tag}>
												<Link to={`/tags/${kebabCase(tag)}`}>
													<em style={{ color:'#fff',fontSize:'10px',padding:'1px 2px',marginLeft:'0.6rem',background: '#999999'}}>{tag}</em>
												</Link>
											</span>
										);
									})}
								</small>
							</section>
						</article>
					</li>
				)
			})}
		</ol>
      </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
		  tags
          spoiler
        }
      }
    }
  }
`
