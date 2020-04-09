import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './../ListItem';

import { render, cleanup } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom';

afterEach(cleanup);

const listItemProps = {
    link: 'https://stripe.com/',
    name: 'Stripe',
    image: 'https://stripe.com/img/v3/home/social.png/',
    color: '#5160ff',
    description:
        'Stripe makes it easy to perform online financial transactions, processing billions of dollars a year for thousands of businesses',
};
const { link, name, image, color, description } = listItemProps;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem />, div);
});

it('renders ListItem correctly', () => {
    const { getByTestId, container } = render(
        <ListItem {...{ link, name, image, color, description }} />,
    );

    const imgMetaData = getByAltText(container, 'Stripe logo');
    const listComponentMetaData = getByTestId('list-style');

    expect(imgMetaData.alt).toBe('Stripe logo');
    expect(listComponentMetaData.style.borderColor).toBe(color);
    expect(getByTestId('list')).toHaveTextContent(description);
});

it('matches snapshot', () => {
    const listItemTree = render(<ListItem {...{ link, name, image, color, description }} />);

    expect(listItemTree.firstChild).toMatchSnapshot();
});
