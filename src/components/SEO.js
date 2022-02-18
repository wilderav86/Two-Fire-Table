import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  siteUrl,
  description,
  author,
  keywords,
  pathname,
  lang,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaSiteUrl = siteUrl || data.site.siteMetadata.siteUrl;
        const metaImage = data.file.childImageSharp.gatsbyImageData;
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const canonical = pathname
          ? `${site.siteMetadata.siteUrl}${pathname}`
          : null;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaKeywords = keywords || [
          "two",
          "fire",
          "table",
          "catering",
          "open",
          "fire",
          "cooking",
          "event",
        ];

        return (
          <Helmet
            title={title}
            htmlAttributes={{
              lang,
            }}
            link={
              canonical
                ? [
                    {
                      rel: "canonical",
                      href: canonical,
                    },
                  ]
                : []
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },

              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor || ``,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: metaSiteUrl,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        author
        description
        menupageLinks {
          pageName
        }
        siteUrl
        title
      }
    }
    file(relativePath: { eq: "fourchickens.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default SEO;
