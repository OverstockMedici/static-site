import React from 'react';
import ReactDOM from 'react-dom';
import ListingsRow from './../ListingsRow';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListingsRow />, div);
});

it('renders ListingsRow correctly', () => {
    const { getByTestId, container } = render(
        <ListingsRow
            title="Pro Esports Player"
            url="https://www.fnatic.com/"
        />,
    );
    expect(getByTestId('listings-row')).toHaveTextContent('Pro Esports Player');
    expect(document.querySelector('a').getAttribute('href')).toBe(
        'https://www.fnatic.com/',
    );
});

it('matches snapshot', () => {
    const listingsRowTree = renderer
        .create(
            <ListingsRow
                title="Pro Esports Player"
                url="https://www.fnatic.com/"
            />,
        )
        .toJSON();

    expect(listingsRowTree).toMatchSnapshot();
});
