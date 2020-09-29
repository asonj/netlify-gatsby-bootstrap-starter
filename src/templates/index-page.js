import React from "react";
import { Link, graphql } from "gatsby";
import { Container, Row, Col, Card } from "react-bootstrap";
import SEO from "../components/seo";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import ContactForm from "../components/forms/contact";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({ title, titleSEO, backgroundImage, content }) => (
  <div>
    <SEO title={titleSEO} />
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!backgroundImage.childImageSharp ? backgroundImage.childImageSharp.fluid.src : backgroundImage
        })`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1 className="title">{title}</h1>
      </div>
    </div>
    <div className="section top-left-angle" id="aboutUs">
      <Container>
        <Row>
          <Col>
            <ReactMarkdown source={content} escapeHtml={false} linkTarget="_blank" />
          </Col>
        </Row>
      </Container>
    </div>

    <div>
      <Container className="section">
        <Row>
          <Col>
            <h2 className="text-center">LATEST STORIES</h2>
            <BlogRoll />
            <div className="text-centered">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="background-parallax-wrapper">
        <div className="background-parallax"></div>
      </div>
      <Container className="section" id="contact">
        <Row className="d-flex flex-row justify-content-center">
          <Col xs={12} lg={8} className="mt-5 mt-lg-0">
            <Card>
              <Card.Body className="px-5 mx-5 py-5 ">
                <ContactForm title="Contact Us" subTitle="Fill out the form below" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("FRONTMATTER", frontmatter);
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        titleSEO={frontmatter.titleSEO}
        backgroundImage={frontmatter.backgroundImage}
        content={frontmatter.content}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        titleSEO
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
      }
    }
  }
`;
