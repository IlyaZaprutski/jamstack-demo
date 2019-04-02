import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = ({ pageContext, data, location }) => {
    const post = data.contentfulPost;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={post.title} description={post.subtitle} />
            <h1>{post.title}</h1>
            <p
                style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1),
                }}
            >
                {post.createdAt}
            </p>

            <Img fluid={post.image.fluid} />

            <div dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
            <hr
                style={{
                    marginBottom: rhythm(1),
                }}
            />
            <Bio />

            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                }}
            >
                <li>
                    {previous && (
                        <Link to={`/${previous.slug}`} rel="prev">
                            {'← '}
                            {previous.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={`/${next.slug}`} rel="next">
                            {next.title}
                            {' →'}
                        </Link>
                    )}
                </li>
            </ul>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulPost(slug: { eq: $slug }) {
            title
            subtitle
            slug
            createdAt(formatString: "MMM D, YYYY")
            content {
                childContentfulRichText {
                    html
                }
            }
            image {
                fluid(quality: 85) {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
    }
`;
