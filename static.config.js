import path from 'path';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';

export default {
    siteRoot: 'https://www.mediciventures.com',
    stagingSiteRoot: '/',
    getRoutes: async () => {
        const news = [
            {
                id: 1,
                link: 'https://www.coindesk.com/overstock-turns-medici-ventures-into-a-fund-to-reap-value-of-blockchain-assets',
                title: 'Coindesk - Overstock Turns Medici Ventures Into a Fund to Reap Value of Blockchain AssetsCoindesk - Overstock Turns Medici Ventures Into a Fund to Reap Value of Blockchain Assets',
                createdAt: '2021-01-26',
                paragraphs: []
            },
            {
                id: 2,
                link: 'https://blockchaintechnology-news.com/2021/01/settlemint-looks-to-blockchain-self-sovereign-identity-with-identimint/',
                title: 'The Block – SettleMint looks to blockchain self-sovereign identity with IdentiMint',
                createdAt: '2021-01-25',
                paragraphs: []
            },
            {
                id: 3,
                link: 'https://www.phocuswire.com/iata-travel-pass-digital-health-solution-used-by-most-of-world-s-biggest-airlines-in-March',
                title: 'Phocus Wire – IATA Travel Pass digital health solution to be rolled out to major airlines in March',
                createdAt: '2021-01-13',
                paragraphs: []
            },
            {
                id: 4,
                link: 'https://www.caymancompass.com/2021/01/13/rf-to-offer-digital-currency-transactions-in-partnership-with-bitt/',
                title: 'Cayman Compass – RF to offer digital currency transactions in partnership with Bitt',
                createdAt: '2021-01-13',
                paragraphs: []
            },
            {
                id: 5,
                link: 'https://www.coindesk.com/argentinas-ripio-acquires-second-largest-crypto-exchange-in-brazil',
                title: 'Coindesk – Argentina’s Ripio Acquires Second-Largest Crypto Exchange in Brazil',
                createdAt: '2021-01-05',
                paragraphs: []
            },
            {
                id: 6,
                link: 'https://bitcoinexchangeguide.com/mastercard-and-grainchain-launch-blockchain-food-traceability-platform-for-latin-north-america/',
                title: 'Bitcoin Exchange Guide – Mastercard And GrainChain Launch Blockchain Food Traceability Platform For Latin & North AmericaBitcoin Exchange Guide – Mastercard And GrainChain Launch Blockchain Food Traceability Platform For Latin & North America',
                createdAt: '2020-10-30',
                paragraphs: []
            },
            {
                id: 7,
                link: 'https://bitcoinexchangeguide.com/mastercard-and-grainchain-launch-blockchain-food-traceability-platform-for-latin-north-america/',
                title: 'Bitcoin Exchange Guide – Mastercard And GrainChain Launch Blockchain Food Traceability Platform For Latin & North AmericaBitcoin Exchange Guide – Mastercard And GrainChain Launch Blockchain Food Traceability Platform For Latin & North America',
                createdAt: '2020-10-30',
                paragraphs: []
            },
            {
                id: 8,
                link: 'https://www.coindesk.com/overstocks-medici-ventures-invests-8m-in-blockchain-firm-bitt',
                title: 'Coindesk – Overstock’s Medici Ventures Invests $8M in Blockchain Firm Bitt',
                createdAt: '2020-10-28',
                paragraphs: []
            },
            {
                id: 9,
                link: 'https://www.ledgerinsights.com/stella-artois-budweiser-owner-ab-inbev-uses-blockchain-from-barley-field-to-bar/',
                title: 'Ledger Insights – Stella Artois, Budweiser owner AB InBev uses blockchain from barley field to bar',
                createdAt: '2020-10-26',
                paragraphs: []
            },
        ];

        const jobs = []

        return [
            {
                path: '/',
                template: 'src/routes/home/Home',
            },
            {
                path: '/companies',
                template: 'src/routes/companies/Companies',
            },
            {
                path: '/team',
                template: 'src/routes/team/Team',
                getData: () => ({
                    jobs,
                }),
            },
            {
                path: '/news',
                template: 'src/routes/news/News',
                getData: () => ({
                    news,
                }),
            },
            {
                path: '/contact',
                template: 'src/routes/contact/Contact',
            },
            {
                path: '404',
                template: 'src/routes/notFound/NotFound',
            },
        ];
    },
    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { routeInfo, renderMeta, inlineScripts },
    }) => {
        const logo = '/img/medici-ventures-logo.png';
        const domain = 'https://www.mediciventures.com';
        const gTag = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'UA-145816993-1');
        `;

        const jsonLd = `
            [
                {
                    "url":"https://www.mediciventures.com",
                    "name":"Medici Ventures INC",
                    "description":"Medici Ventures is a wholly-owned subsidiary of Overstock.com launched in 2014. Our goal is to change the world by advancing blockchain technology.",
                    "image":"${domain}${logo}",
                    "@context":"http://schema.org",
                    "@type":"WebSite"
                },
                {
                    "legalName":"Medici Ventures Inc",
                    "email":"info@mediciventures.com",
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
        `;

        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/x-icon"
                        href="img/favicon.ico"
                    />
                    <link
                        rel="preconnect"
                        href="https://www.google-analytics.com"
                    />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-145816993-1"
                    ></script>
                    <script dangerouslySetInnerHTML={{ __html: gTag }} />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: jsonLd }}
                    />
                </Head>
                <Body>{children}</Body>
            </Html>
        );
    },
    plugins: [
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        require.resolve('react-static-plugin-styled-components'),
    ],
};
