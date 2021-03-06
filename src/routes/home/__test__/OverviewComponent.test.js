import React from 'react';
import ReactDOM from 'react-dom';
import OverviewComponent from './../OverviewComponent';

import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OverviewComponent />, div);
});

it('renders OverviewComponent correctly', () => {
    const { getByTestId, container } = render(
        <OverviewComponent
            heading="Democratize Capital"
            content="lorem ipsum"
            styleName="overview-1"
        />,
    );
    expect(getByTestId('overview')).toHaveTextContent('Democratize Capital');
    expect(getByTestId('overview')).toHaveTextContent('lorem ipsum');
    expect(container.firstChild).toHaveClass('overview-1');
});

it('matches snapshot', () => {
    const overviewTree = renderer
        .create(
            <OverviewComponent
                heading="Democratize Capital"
                content="lorem ipsum"
                styleName="overview-1"
            />,
        )
        .toJSON();

    expect(overviewTree).toMatchSnapshot();
});
