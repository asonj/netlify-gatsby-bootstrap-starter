import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
import ReactMarkdown from "react-markdown/with-html";
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import linkedin from "../img/social/linkedin.svg";
import axios from "axios";
export const FooterComponentTemplate = ({ contactInfo }) => {
  const [formData, updateFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(process.env.SERVER_URL);
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios
        .post(`${process.env.SERVER_URL}/newsletter`, {
          values: formData,
        })
        .then((res) => {
          setSubmitted(true);
        });
    }
  };
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <Container fluid>
        <Row className="d-flex flex-row justify-content-center">
          <Col xs={12} lg={4} xl={2}>
            <ReactMarkdown source={contactInfo} escapeHtml={false} linkTarget="_blank" rel="noreferrer"/>
            <div className="">
              <a title="linkedin" href="https://www.linkedin.com/company/semco-style-institute-usa" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" style={{ width: "1.5em", height: "1.5em" }} className="mr-2" />
              </a>
              <a title="twitter" href="https://twitter.com/SemcoStyleUSA" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Twitter" style={{ width: "1.5em", height: "1.5em" }} className="mr-2" />
              </a>
              <a title="facebook" href="https://www.facebook.com/SemcoStyleInstituteUSA" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" style={{ width: "1.5em", height: "1.5em" }} className="mr-2" />
              </a>
            </div>
          </Col>
          <Col xs={12} lg={2} className="px-5 mx-5 d-none d-lg-block">
            <img
              src={"/img/logo.png"}
              alt="SemcoStyle"
              style={{ width: "150px", height: "auto", maxHeight: "150px" }}
            />
          </Col>
          <Col xs={12} lg={4} xl={2} className="mt-3 mt-lg-0">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label lg={2}>Email address</Form.Label>
                <Form.Control name="EMAIL" type="email" placeholder="Enter email" required onChange={handleChange} />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <div style={{ position: "absolute", left: "-5000px" }} ariaHidden="true">
                <input type="text" name="bInput" tabindex="-1" onChange={handleChange} />
              </div>
              {!submitted ? (
                <Button variant="success" className="w-100" type="submit" name="subscribe">
                  Subscribe
                </Button>
              ) : (
                <Alert variant="success">Thank you for subscribing!</Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const FooterComponent = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "footer-component" } }) {
            frontmatter {
              contactInfo
            }
          }
        }
      `}
      render={({ markdownRemark }) => {
        const { frontmatter } = markdownRemark;
        return <FooterComponentTemplate contactInfo={frontmatter.contactInfo} {...props} />;
      }}
    />
  );
};

export default FooterComponent;
