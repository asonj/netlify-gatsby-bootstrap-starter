import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { Row, Col, Card } from "react-bootstrap";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import readingTime from "reading-time";

const BlogRoll = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Row>
      {posts &&
        posts.map(({ node: post }) => {
          const { text: stats } = readingTime(post.html);
          return (
            <Col xs={12} md={6} key={post.id}>
              <Link className="green no-link-style" to={post.fields.slug}>
                <Card>
                  <Card.Title>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        style: {
                          maxHeight: "200px",
                          maxWidth: "auto",
                        },
                      }}
                    />
                    <div style={{ padding: "1.125rem 1.125rem 0 1.125rem" }}>
                      <h3 className="hover">{post.frontmatter.title}</h3>

                      <p className="gray pb-0">
                        {post.frontmatter.date}

                        <span className="mx-2 gray">·</span>

                        {stats}
                      </p>
                    </div>
                  </Card.Title>
                  <Card.Body className="pt-0">
                    <p className="black">
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
    </Row>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
