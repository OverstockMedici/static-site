import React from 'react';
import ReactDOM from 'react-dom';
import ListItemMobile from './../ListItemMobile';

import { render, cleanup } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom';

import renderer from 'react-test-renderer';

afterEach(cleanup);

const listItemMobileProps = {
    link: 'https://www.spacex.com/',
    name: 'SpaceX',
    image: 'https://www.spacex.com/sites/spacex/files/spacex_logo_white.png',
    color: 'rgb(0, 0, 0)',
    description:
        'The first company to achieve orbit with liquid-fueled rocket, SpaceX develops launch systems at dramatically-lower costs than any entity - government or private - in history',
};
const { link, name, image, color, description, linkText } = listItemMobileProps;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItemMobile />, div);
});

it('renders List correctly', () => {
    const { getByTestId, container } = render(
        <ListItemMobile {...{ link, name, image, color, description, linkText }} />,
    );

    const imgMetaData = getByAltText(container, 'SpaceX logo');
    const listComponentMetaData = getByTestId('list-mobile-style');

    expect(imgMetaData.alt).toBe('SpaceX logo');
    expect(listComponentMetaData.style.backgroundColor).toBe(color);
    expect(getByTestId('list-mobile')).toHaveTextContent(description);
});

it('matches snapshot', () => {
    const listItemMobileTree = renderer
        .create(
            <ListItemMobile
                {...{ link, name, image, color, description, linkText }}
            />,
        )
        .toJSON();

    expect(listItemMobileTree).toMatchSnapshot();
});
