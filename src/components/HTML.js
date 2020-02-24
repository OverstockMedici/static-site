import path from 'path';

// Getting bundleName from manifest to use cache busting on main.[hashcontent].js
const manifestPath = process.env.NODE_ENV === 'production'
    ? path.join(__dirname, '../../', 'public/manifest.json')
    : path.join(__dirname, '../../', 'dist/public/manifest.json');
const manifest = require(manifestPath);
const bundleName = manifest['main.js'];

const CSS = '/App.css';
const logo = '/img/medici-ventures-logo.png';
const domain = 'https://www.mediciventures.com';

const HTML = (htmlData) => {
    const {
        markup, meta, serverStateString, styles, reqUrl
    } = htmlData;

    const {
        title, description, image
    } = meta;

    const imageMeta = image
        ? `<meta property="og:image" content="https://www.mediciventures.com${image}" />`
        : '';

    return `
<html lang="en">
    <head>
        <title>${title}</title>
        <!-- this is a change -->
        <meta name="description" content="${description}" />
        <link rel="canonical" href="https://www.mediciventures.com${reqUrl}" />
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        ${imageMeta}
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145816993-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-145816993-1');
        </script>
        <script type="application/ld+json">
            [
                {
                    "url":"https://www.mediciventures.com",
                    "name":"Medici Ventures INC",
                    "description":"${description}",
                    "image":"${domain}${logo}",
                    "@context":"http://schema.org",
                    "@type":"WebSite"
                },
                {
                    "legalName":"Medici Ventures Inc",
                    "email":"info@mediciventures.com",
                    "sameAs":[],
                    "@context":"http://schema.org",
                    "@type":"Organization"
                },
                {
                    "address":"Coliseum Way\nMidvale, UT, 84047\nUnited States",
                    "telephone":"801-947-3100",
                    "image":"${domain}${logo}",
                    "name":"Medici Ventures Inc",
                    "@context":"http://schema.org",
                    "@type":"Place"
                }
            ]
        </script>
        <script>window.__INITIAL_STATE__ = ${serverStateString};</script>
        <script async type="application/javascript" src="/${bundleName}"></script>
        <link rel="stylesheet" href="${CSS}" />
        ${styles}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>
    `;
};

export default HTML;
