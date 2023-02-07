const activeEnv = process.env.NODE_ENV;

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.twofiretable.com",
    title: "Two Fire Table",
    description: "Thoughtfully prepared over-the-fire dining experiences",
    proprietor: "Sarah Rennie",
    instagramHandle: "@twofiretable",
    author: "Adam Wilder",
    menupageLinks: [
      {
        pageName: "About Us",
        pageLink: "/about",
      },

      {
        pageName: "Sample Menus",
        pageLink: "/menu",
      },

      {
        pageName: "Gallery",
        pageLink: "/gallery",
      },
      {
        pageName: "Book Your Event",
        pageLink: "/contact",
      },
    ],
  },
  flags: {
    LMDB_STORE: true,
    DETECT_NODE_MUTATIONS: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-sitemap`,

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.twofiretable.com",
        sitemap: "https://www.twofiretable.com/sitemap.xml",
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Oswald",
            weights: ["200", "500"],
          },
          {
            family: "Montserrat",
            weights: ["400"],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_INSTAGRAM,
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_SIGNUP, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
};
