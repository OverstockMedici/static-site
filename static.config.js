import path from 'path';
import admin from 'firebase-admin';

const initialize = async () => {
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: 'https://corp-200921.firebaseio.com',
        });
    }
};

export default {
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
                path: '/companies',
                template: 'src/pages/companies/Companies',
            },
            {
                path: '/team',
                template: 'src/pages/team/Team',
                getData: () => ({
                    jobs,
                }),
            },
            {
                path: 'news',
                template: 'src/pages/news/News',
                getData: () => ({
                    news,
                }),
            },
            {
                path: '/contact',
                template: 'src/pages/contact/Contact',
            },
            {
                path: '404',
                template: 'src/pages/notFound/NotFound',
            },
        ];
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
