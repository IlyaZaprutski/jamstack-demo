import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = ({ location, data }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
            <Bio />
            <Link
                style={{
                    display: 'flex',
                    boxShadow: 'none',
                    textDecoration: 'none',
                }}
                to="/markdown-blog"
            >
                Markdown Blog
            </Link>
            <Link
                style={{
                    display: 'flex',
                    boxShadow: 'none',
                    textDecoration: 'none',
                }}
                to="/contentful-blog"
            >
                Contentful Blog
            </Link>
            <Link
                style={{
                    display: 'flex',
                    boxShadow: 'none',
                    textDecoration: 'none',
                }}
                to="/contact"
            >
                Contact
            </Link>
            <Link
                style={{
                    display: 'flex',
                    boxShadow: 'none',
                    textDecoration: 'none',
                }}
                to="/netlify-function"
            >
                Netlify Function
            </Link>
        </Layout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
