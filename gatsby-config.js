module.exports = {
  siteMetadata: {
    title: 'Abayomi Popoola',
    author: {
      name: `Abayomi Popoola`,
      summary: `I write about topics I find interesting—mostly things that are worth sharing.`,
    },
    description: `A blog about ideas worth sharing. Newsletter & articles by Abayomi Popoola`,
    siteUrl: 'https://abayomipopoola.com',
    social: {
      twitter: `abayomipo`,
    },
  },
  pathPrefix: '/',
  plugins: [
	  {
		  resolve: `gatsby-source-filesystem`,
		  options: {
			  path: `${__dirname}/content/blog`,
			  name: `blog`,
		  },
	  },
	  {
		  resolve: `gatsby-source-filesystem`,
		  options: {
			  path: `${__dirname}/content/assets`,
			  name: `assets`,
		  },
	  },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130774000-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abayomi Popoola`,
        short_name: `abayomipopoola`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1a73e8`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-www-abayomipopoola-com`
      }
    },
  ],
}
