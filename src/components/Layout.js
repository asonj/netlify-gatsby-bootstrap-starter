import React from "react";
import Footer from "../templates/footer-component";
import NavbarComponent from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./all.sass";
// import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  // const { title, description } = useSiteMetadata();
  return (
    <>
      <NavbarComponent />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
