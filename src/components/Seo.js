import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, slug, children }) => {
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
  const siteUrl = slug
    ? `${site.siteMetadata.siteUrl}${slug}`
    : site.siteMetadata.siteUrl

  return (
    <>
      <title>{title ? `${title} — ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
