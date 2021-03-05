module.exports = {
  siteMetadata: {
    title: `Organice Spaces with Erum`,
    description: `Professional Organizer in Udaipur, Rajasthan, India`,
    author: `@gatsbyjs`,
    details: {
      phone_number: '+91 7014418191',
      email: 'organicespaceswitherum@gmail.com',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        siteUrl: `https://www.organicespaceswitherum.com`,
        noTrailingSlash: true,
        noHash: true,
        noQueryString: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.organicespaceswitherum.com',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
