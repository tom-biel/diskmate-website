module.exports = {
  siteMetadata: {
    title: `DiskMate for macOS`,
    description: `Eject all removable drives with a click or a keyboard shortcut.`,
    author: `Tom Biel`,
    siteUrl: `https://diskmate.tombiel.com`,
    keywords: `macOS, osx, eject, unmount, drive, drives, disk, all, app, application, utility, status bar, dark theme`,
    twitter: 'https://twitter.com/diskmate',
		github: `https://github.com/tom-biel/diskmate-website`,
    medium: 'https://medium.com/@tombiel',
    gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DiskMate`,
        short_name: `DiskMate`,
        start_url: `/`,
        background_color: `#444`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-149020095-1',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
