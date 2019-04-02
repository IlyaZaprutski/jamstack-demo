require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const proxy = require('http-proxy-middleware');

module.exports = {
    siteMetadata: {
        title: 'iTechArt JAMstack Demo',
        author: 'Ilya Zaprutski',
        description: 'A starter blog demonstrating what Gatsby can do.',
        siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
    },

    developMiddleware: (app) => {
        app.use(
            '/.netlify/functions/',
            proxy({
                target: 'http://localhost:9000',
                pathRewrite: {
                    '/.netlify/functions/': '',
                },
            }),
        );
    },

    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                // trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'iTechArt JAMstack Demo',
                short_name: 'JAMstack Demo',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#ff0011',
                display: 'minimal-ui',
                icon: 'content/assets/itechaert-icon.png',
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        '@contentful/gatsby-transformer-contentful-richtext',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: '#ff0011',
                showSpinner: true,
            },
        },
    ],
};
