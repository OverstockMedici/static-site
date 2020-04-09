import React from 'react';
import ReactDOM from 'react-dom';
import TeamCard from './../TeamCard';

import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const figure = document.createElement('figure');
    ReactDOM.render(<TeamCard />, figure);
});

it('renders TeamCard correctly', () => {
    const { getByTestId, container } = render(
        <TeamCard
            name="Jonathan Johnson"
            title="Cool Guy"
            info="Does cool things"
        />,
    );
    expect(getByTestId('team-card')).toHaveTextContent('Jonathan Johnson');
    expect(getByTestId('team-card')).toHaveTextContent('Cool Guy');
    expect(getByTestId('team-card')).toHaveTextContent('Does cool things');
});

it('matches snapshot', () => {
    const teamCardTree = renderer
        .create(
            <TeamCard
                name="Jonathan Johnson"
                title="Cool Guy"
                info="Does cool things"
            />,
        )
        .toJSON();

    expect(teamCardTree).toMatchSnapshot();
});
