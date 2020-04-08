import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import ArticleList from './../ArticleList';

import { render, cleanup } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

const listProps = {
    id: 1,
    link: 'https://stripe.com/',
    imageURL: 'https://stripe.com/img/v3/home/social.png/',
    title: 'Stripe',
    createdAt: 1585288800000,
    paragraphs: [
        'SettleMint, a Belgium-based blockchain',
        'With its scalable low-code, infrastructure-agnosti…sations that want to adopt and deploy blockchain.',
    ],
};
const { id, link, imageURL, title, createdAt, paragraphs } = listProps;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ArticleList
            {...{ id, link, imageURL, title, createdAt, paragraphs }}
        />,
        div,
    );
});

it('renders ArticleList correctly', () => {
    const { getByTestId, container } = render(
        <ArticleList
            {...{ id, link, imageURL, title, createdAt, paragraphs }}
        />,
    );

    const articleListComponent = getByTestId('article-list');

    expect(document.querySelector('a').getAttribute('href')).toBe(link);
    expect(articleListComponent).toHaveTextContent(paragraphs[0]);
    expect(articleListComponent).toHaveTextContent(title);
    expect(articleListComponent).toHaveTextContent(
        dayjs(createdAt).format('MMM DD[,] YYYY'),
    );
});

it('matches snapshot', () => {
    const listTree = renderer
        .create(
            <ArticleList
                {...{ id, link, imageURL, title, createdAt, paragraphs }}
            />,
        )
        .toJSON();

    expect(listTree).toMatchSnapshot();
});
