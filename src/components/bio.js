import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const bioQuery = graphql`
    query BioQuery {
        avatar: file(relativePath: { eq: "profile-pic.png" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
            }
        }
    }
`;

const Bio = () => (
    <StaticQuery
        query={bioQuery}
        render={(data) => {
            const { author } = data.site.siteMetadata;
            return (
                <div
                    style={{
                        display: 'flex',
                        marginBottom: rhythm(2.5),
                    }}
                >
                    <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author}
                        style={{
                            marginRight: rhythm(1 / 2),
                            marginBottom: 0,
                            minWidth: 50,
                            borderRadius: '100%',
                        }}
                        imgStyle={{
                            borderRadius: '50%',
                        }}
                    />
                    <p>
                        Demo blog by
                        {' '}
                        <a href="https://mobile.twitter.com/IlyaZaprutski">
                            <strong>{author}</strong>
                        </a>
                        .
                        <br />
                        Basic setup for a full-featured blog
                    </p>
                </div>
            );
        }}
    />
);

export default Bio;
