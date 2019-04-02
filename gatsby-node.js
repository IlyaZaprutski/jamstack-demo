const { createFilePath } = require('gatsby-source-filesystem');

const createMarkdownBlogPosts = require('./src/utils/page-creator/markdown-blog-post');
const createContentfulBlogPosts = require('./src/utils/page-creator/contentful-blog-post');

exports.createPages = async ({ graphql, actions }) => {
    await createMarkdownBlogPosts({ graphql, actions });
    await createContentfulBlogPosts({ graphql, actions });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: 'slug',
            node,
            value,
        });
    }
};
