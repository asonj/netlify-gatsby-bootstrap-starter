import React from "react";
import { FooterComponentTemplate } from "../../templates/footer-component";

const FooterComponentPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <FooterComponentTemplate contactInfo={data.contactInfo} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default FooterComponentPreview;
