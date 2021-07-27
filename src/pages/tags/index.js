import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../../components/Bio'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

const Tags = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = data.allMarkdownRemark.group;

  return (
    <Layout location={location} title={siteTitle}>
		<SEO title="All tags" />
		<Bio />

      <h1 style={{ backgroundColor:'#999999',padding:'0.75rem 1.5rem' }}>All tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(limit: 5000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;