import React from 'react';
import Link from 'gatsby-link';

const Blog = ({ data }) => (
  <div className="blog-index">
    <h1>This is a blog, I guess.</h1>
    <p>{data.allMarkdownRemark.totalCount} {data.allMarkdownRemark.totalCount == 1 ? "post" : "posts"}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link to={node.fields.slug} >
          <div className="blog-post-link" key={node.id}>
            <h3>{`${node.frontmatter.title} - ${node.frontmatter.date}`}</h3>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
  </div>
);

export const query = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
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