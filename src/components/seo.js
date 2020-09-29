/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

function SEO({ description, lang, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "favicon/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "favicon/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "favicon/apple-touch-icon.png",
        },
        {
          rel: "shortcut icon",
          href: "favicon/favicon.ico",
        },
        {
          rel: "manifest",
          href: "favicon/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ]}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: "SHAPING THE FUTURE OF WORK",
        },
        {
          name: `image`,
          content: "https://semcostyle.us/img/og-image.png",
        },
        {
          itemprop: `name`,
          content: title,
        },
        {
          itemprop: `description`,
          content: "SHAPING THE FUTURE OF WORK",
        },
        {
          itemprop: `image`,
          content: "https://semcostyle.us/img/og-image.png",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: "SHAPING THE FUTURE OF WORK",
        },
        {
          property: `og:image`,
          content: "https://semcostyle.us/img/og-image.png",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: "SHAPING THE FUTURE OF WORK",
        },
        {
          property: `twitter:image:src`,
          content: "https://semcostyle.us/img/og-image.png",
        },
        {
          name: "viewport",
          content: "user-scalable=no, width=device-width, initial-scale=1.0",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "msapplication-config",
          content: "favicon/browserconfig.xml",
        },
        {
          name: "msapplication-TileColor",
          content: "#2b5797",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ].concat(meta)}
    ></Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: "Semco Style Institute",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
