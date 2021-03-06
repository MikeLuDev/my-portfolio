import React from 'react';
import Link from 'gatsby-link';

const Blog = ({ data }) => (
  <div className="blog-index">
    <h1>Blog</h1>
    <p>{data.allMarkdownRemark.totalCount} {data.allMarkdownRemark.totalCount == 1 ? "post" : "posts"}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link to={node.fields.slug}>
        <div className="blog-link">
            <div className="blog-link-head" key={node.id}>
              <h3>{`${node.frontmatter.title}`}</h3>
              <p>{`${node.frontmatter.date}`}</p>
            </div>
        </div>
      </Link>
      ))}
  </div>
);

// Export graphql query which returns all .md files sorted by date with the newest first
// TODO: implement sorting
export const query = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog;