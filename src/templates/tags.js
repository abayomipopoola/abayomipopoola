import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Bio from '../components/Bio'
import SEO from '../components/Seo'

const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
const capitalize = string => string.replace(/\b([a-z])/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));

const TagsTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.nodes;
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO 
        title={`${capitalize(tag)} — Posts`}
        description={`${capitalize(tag)} Posts`}
        slug={`/tags/${tag.replace(/\s+/g, '-')}`}
      />
		  <Bio />
        
      <h2 style={{ color: '#666666' }}>{totalCount}{totalCount == 1 ? ' post' : ' posts'} in <em>{tag}</em></h2>

		  <ol style={{ listStyle: 'none' }}>
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
                                dangerouslySetInnerHTML={{
                                    __html: post.frontmatter.spoiler
                                }}
                                itemProp="description"
                            />
                            <small style={{ color: '#666666'}}>
                                {`${post.frontmatter.date} · ${post.timeToRead} min read`}
                            </small>
                            <small>
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
                            </small>
                        </section>
                    </article>
                </li>
            )
        })}
      </ol>

      <Link style={{ boxShadow: 'none' }} to='/tags'>
          <em>Posts Tags</em>
      </Link>
    </Layout>
  );
};

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 5000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          tags
          title
          spoiler
        }
        timeToRead
      }
    }
  }
`;