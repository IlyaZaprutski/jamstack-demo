import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = ({ location, data }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
            <Bio />

            <form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out:
                        {' '}
                        <input name="bot-field" />
                    </label>
                </p>
                <p>
                    <label>
                        Your name:
                        <br />
                        <input type="text" name="name" o />
                    </label>
                </p>
                <p>
                    <label>
                        Your email:
                        <br />
                        <input type="email" name="email" />
                    </label>
                </p>
                <p>
                    <label>
                        Message:
                        <br />
                        <textarea name="message" />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </Layout>
    );
};

export default Contact;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
