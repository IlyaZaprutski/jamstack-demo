import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allContentfulPost.edges;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Markdown blog" keywords={['blog', 'gatsby', 'contentful', 'javascript', 'react']} />
            <Bio />
            {posts.map(({ node }) => (
                <div key={node.id}>
                    <h3
                        style={{
                            marginBottom: rhythm(1 / 4),
                        }}
                    >
                        <Link style={{ boxShadow: 'none' }} to={`/${node.slug}`}>
                            {node.title}
                        </Link>
                    </h3>
                    <small>{node.createdAt}</small>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: node.subtitle,
                        }}
                    />
                    <Img fluid={node.image.fluid} />
                </div>
            ))}
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
            edges {
                node {
                    id
                    slug
                    title
                    subtitle
                    createdAt(formatString: "MMM D, YYYY")
                    image {
                        fluid(maxHeight: 200, quality: 85) {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`;
