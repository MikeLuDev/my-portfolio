// Gatsby function for creating 'slugs' from file names
const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require(`path`);

// When a node is created, do stuff with it
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    // Make function which allows us to create additional fields on nodes created by other plugins
    const { createNodeField } = boundActionCreators;

    // If the type of node is MarkdownRemark
    if (node.internal.type === `MarkdownRemark`) {
        // Make slug for later use
        const slug = createFilePath({ node, getNode, basePath: `pages` });

        // Edit our fields on the MarkdownRemark field using above function
        // Declare the node we're editing, the value name, and the value itself
        createNodeField({
            node,
            name: `slug`,
            value: slug,
          })
    }
};  

// Use Gatsby createPages api to create pages based on graphql query
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        // Get all pages with this graphql query
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }`)
        .then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/layouts/blog-post.jsx`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                });
            });
            resolve();
        });
    });
};