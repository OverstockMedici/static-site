import React, { useContext } from 'react';
import Meta from '../../components/Meta';
import { Hero, Articles } from './news.style';
import { content, meta } from '../../content/news.content';
import { useRouteData } from 'react-static';
import ArticleListItem from './ArticleListItem';

const { heading1 } = content;

export default function News() {
    const { news } = useRouteData();


    console.log('news', news);
    const buildArticles = () =>
        news.map(({ link, imageURL, title, createdAt, paragraphs, id }) => (
            <ArticleListItem
                key={id}
                {...{ link, imageURL, title, createdAt, paragraphs }}
            />
        ));

    return (
        <div className="news">
            <Meta {...meta} />
            <main role="main">
                <Hero>
                    <h1>{heading1}</h1>
                </Hero>
                <Articles>{buildArticles()}</Articles>
            </main>
        </div>
    );
}
