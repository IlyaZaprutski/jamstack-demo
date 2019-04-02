import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Thanks = ({ location, data }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
            <Bio />
            <h1>Thank you!</h1>
            <p>This is a custom thank you page for form submissions</p>
        </Layout>
    );
};

export default Thanks;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
