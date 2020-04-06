import React from 'react';
import ReactDOM from 'react-dom';
import ListMobile from './../ListMobile';

import { render, cleanup } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

const listMobileProps = {
    link: 'https://www.spacex.com/',
    name: 'SpaceX',
    image: 'https://www.spacex.com/sites/spacex/files/spacex_logo_white.png',
    color: 'rgb(0, 0, 0)',
    description:
        'The first company to achieve orbit with liquid-fueled rocket, SpaceX develops launch systems at dramatically-lower costs than any entity - government or private - in history',
};
const { link, name, image, color, description, linkText } = listMobileProps;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListMobile />, div);
});

it('renders List correctly', () => {
    const { getByTestId, container } = render(
        <ListMobile {...{ link, name, image, color, description, linkText }} />,
    );

    expect(document.querySelector('a').getAttribute('href')).toBe(link);
    const imgMetaData = getByAltText(container, 'SpaceX logo');
    const listComponentMetaData = getByTestId('list-mobile-style');

    expect(imgMetaData.alt).toBe('SpaceX logo');
    expect(listComponentMetaData.style.backgroundColor).toBe(color);
    expect(getByTestId('list-mobile')).toHaveTextContent(description);
});

it('matches snapshot', () => {
    const listMobileTree = renderer
        .create(
            <ListMobile
                {...{ link, name, image, color, description, linkText }}
            />,
        )
        .toJSON();

    expect(listMobileTree).toMatchSnapshot();
});
