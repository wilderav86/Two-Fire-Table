module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Two-Fire-Table",
    description:
      "A website for Two Fire Table built with Gatsby. Two Fire Table seeks to thoughtfully prepare over-the-fire dining experiences that spark profound connections with one another through community and food.",
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
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,

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

    `gatsby-plugin-netlify-cms`,
  ],
};
