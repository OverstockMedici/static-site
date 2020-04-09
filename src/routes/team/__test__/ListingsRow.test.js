import React from 'react';
import ReactDOM from 'react-dom';
import ListingsRow from './../ListingsRow';

import { render, cleanup } from '@testing-library/react';

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
    const listingsRowTree = render(
            <ListingsRow
                title="Pro Esports Player"
                url="https://www.fnatic.com/"
            />,
        );

    expect(listingsRowTree.firstChild).toMatchSnapshot();
});
