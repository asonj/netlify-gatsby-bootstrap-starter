import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = "", childImageSharp, image, className = "", style = {}, loading = "lazy" } = imageInfo;
  console.log("PREVIEW IMAGE", image, childImageSharp);
  if (!!image && !!image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} className={className} loading={loading} style={style} />;
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} className={className} loading={loading} style={style} />;
  }

  if (!!image && typeof image === "string") return <img src={image} alt={alt} className={className} style={style} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
