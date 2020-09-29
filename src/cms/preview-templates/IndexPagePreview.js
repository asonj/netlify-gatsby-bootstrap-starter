import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        headerSection={data.headerSection}
        aboutUs={data.aboutUs}
        videoEmbedSection={data.videoEmbedSection}
        threeColumnSection={data.threeColumnSection}
        methodologySection={data.methodologySection}
        globalNetworkSection={data.globalNetworkSection}
        solutionsSection={data.solutionsSection}
        toolsSection={data.toolsSection}
        imageSection={data.imageSection}
        contactSection={data.contactSection}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
