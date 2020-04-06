import React from 'react';
import ReactDOM from 'react-dom';
import List from './../List';

import { render, cleanup } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

const listProps = {
    link: 'https://stripe.com/',
    name: 'Stripe',
    image: 'https://stripe.com/img/v3/home/social.png/',
    color: '#5160ff',
    description:
        'Stripe makes it easy to perform online financial transactions, processing billions of dollars a year for thousands of businesses',
};
const { link, name, image, color, description } = listProps;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
});

it('renders List correctly', () => {
    const { getByTestId, container } = render(
        <List {...{ link, name, image, color, description }} />,
    );

    expect(document.querySelector('a').getAttribute('href')).toBe(link);
    const imgMetaData = getByAltText(container, 'Stripe logo');
    const listComponentMetaData = getByTestId('list-style');

    expect(imgMetaData.alt).toBe('Stripe logo');
    expect(listComponentMetaData.style.borderColor).toBe(color);
    expect(getByTestId('list')).toHaveTextContent(description);
});

it('matches snapshot', () => {
    const listTree = renderer
        .create(<List {...{ link, name, image, color, description }} />)
        .toJSON();

    expect(listTree).toMatchSnapshot();
});
