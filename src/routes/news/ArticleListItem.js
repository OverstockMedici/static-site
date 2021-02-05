import React from 'react';
import dayjs from 'dayjs';
import { Article } from './news.style';

const ArticleListItem = ({ link, imageURL, title, createdAt, paragraphs }) => {
    const buildParagraphs = (paragraphs) =>
        paragraphs.map((paragraph, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>{paragraph}</p>
        ));

    return (
        <Article data-testid="article-list">
            {/* <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    data-testid="article-list-image"
                    src={imageURL}
                    alt={title}
                />
            </a> */}
            <a
                className="article-heading"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>{title}</h2>
            </a>
            {buildParagraphs(paragraphs)}
            <a
                className="read-more-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Read the full article
            </a>
            <time>{dayjs(createdAt).format('MMM DD[,] YYYY')}</time>
        </Article>
    );
};

export default ArticleListItem;
