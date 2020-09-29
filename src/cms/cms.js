import CMS from "netlify-cms-app";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import FooterComponentPreview from "./preview-templates/FooterComponentPreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("footer-component", FooterComponentPreview);
