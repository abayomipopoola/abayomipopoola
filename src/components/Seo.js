import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, slug, title }) => {
	const { site } = useStaticQuery(
	graphql`
      query {
        site {
          siteMetadata {
            title
            description
			siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
	)

	const defaultTitle = site.siteMetadata?.title
	const metaDescription = description || site.siteMetadata.description
	const siteTitle = title ? `${title} — ${defaultTitle}` : defaultTitle
	const siteUrl = slug ? `${site.siteMetadata.siteUrl}${slug}` : site.siteMetadata.siteUrl

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			defaultTitle={defaultTitle}
			titleTemplate={`%s — ${defaultTitle}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `og:site_name`,
					content: defaultTitle,
				},
				{
					property: `og:title`,
					content: siteTitle,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},

				{
					name: `og:url`,
					content: siteUrl,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.social?.twitter || ``,
				},
				{
					name: `twitter:title`,
					content: siteTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO
