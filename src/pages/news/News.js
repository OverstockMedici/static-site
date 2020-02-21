import React, { useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Hero, Articles, Article } from './news.style';
import { content, meta } from '../../content/news.content';
import { useRouteData } from 'react-static';

const { heading1 } = content;

export default function News() {
    useEffect(() => {
        document.title = meta.title;
    }, []);

    const { news } = useRouteData();

    const buildParagraphs = paragraphs => (
        paragraphs.map((paragraph, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>{paragraph}</p>
        ))
    );

    const buildArticles = () => (
        news.map(article => (
            <Article key={article.id}>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <img src={article.imageURL} alt={article.title} />
                </a>
                <a className="article-heading" href={article.link} target="_blank" rel="noopener noreferrer">
                    <h2>{article.title}</h2>
                </a>
                {buildParagraphs(article.paragraphs)}
                <a className="read-more-link" href={article.link} target="_blank" rel="noopener noreferrer">Read the full article</a>
                <time>{dayjs(article.createdAt).format('MMM DD[,] YYYY')}</time>
            </Article>
        ))
    );


    return (
        <div className="news">
            <main role="main">
                <Hero>
                    <h1>{heading1}</h1>
                </Hero>
                <Articles>
                    {buildArticles()}
                </Articles>
            </main>
        </div>
    );
}
