import path from 'path';
import admin from 'firebase-admin';
import React from 'react';

const initialize = async () => {
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: 'https://corp-200921.firebaseio.com',
        });
    }
};

export default {
    siteRoot: 'https://www.mediciventures.com',
    stagingSiteRoot: '/',
    getRoutes: async () => {
        await initialize();
        const db = admin.firestore();
        const news = await db
            .collection('news')
            .orderBy('createdAt', 'desc')
            .limit(9)
            .get()
            .then(function(querySnapshot) {
                const newsList = [];
                querySnapshot.forEach(function(doc) {
                    const data = doc.data();
                    newsList.push({ ...data, id: doc.id });
                });
                return newsList;
            })
            .catch(function(error) {
                console.log('Error getting documents: ', error);
            });

        const jobs = await db
            .collection('jobs')
            .doc('all')
            .get()
            .then(doc => {
                if (doc.exists) {
                    return doc.data().jobs;
                } else {
                    // doc.data() will be undefined in this case
                    console.log('No such document!');
                }
            })
            .catch(function(error) {
                console.log('Error getting document:', error);
            });

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
    Document: ({ Html, Head, Body, children, state: { routeInfo, renderMeta, inlineScripts } }) => {
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
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
                    <link rel="preconnect" href="https://www.google-analytics.com" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145816993-1"></script>
                    <script dangerouslySetInnerHTML={{__html: gTag}} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonLd}} />
                </Head>
                <Body>{children}</Body>
            </Html>
        );
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
};
