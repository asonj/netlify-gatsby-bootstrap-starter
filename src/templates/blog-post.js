import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import readingTime from "reading-time";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  helmet,
  featuredimage,
  author,
}) => {
  const PostContent = contentComponent || Content;
  const { text: stats } = readingTime(content);
  return (
    <Container className="section" style={{ paddingTop: "56px" }}>
      {helmet || ""}
      <Row className="d-flex flex-row justify-content-center mt-5">
        <Col xs={10} md={8}>
          <h1 className="green">{title}</h1>
          <p className="gray">{description}</p>
          <p className="black">
            {author}
            <span className="mx-2 gray">·</span>
            <span className="gray">{date}</span>
            <span className="mx-2 gray">·</span>
            <span className="gray">{stats}</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post ${title}`,
              style: { maxHeight: "75vh" },
            }}
          />
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-center pt-5">
        <Col xs={10}>
          <PostContent className="blog-post " content={content} />
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`;
