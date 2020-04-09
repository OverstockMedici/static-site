import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-static';
import { Router, useLocation } from '@reach/router';

import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom';

import { renderHook, act } from '@testing-library/react-hooks';

import { Context, reducer, initialState } from '../../../store';
import reducerMiddleware from '../../../reducerMiddleware';
import Contact from '../Contact';

afterEach(cleanup);

const reducerState =
    typeof window !== 'undefined' ? window?.__INITIAL_STATE__ : initialState;
const newReducer = reducerMiddleware(
    reducer,
    reducerState,
    'Medici Global Context',
);

const { result: reduceResult } = renderHook(() =>
    useReducer(newReducer, initialState),
);

// TODO: unit/integration tests are incomplete for this section
// I need more time on how to implement a mock request for emails

describe('Contact page logic', () => {
    const [store, dispatch] = reduceResult.current;

    const RenderContextAndRoutes = ({ children }) => (
        <Context.Provider value={{ store, dispatch }}>
            <Router primary={false}>{children}</Router>
        </Context.Provider>
    );

    test('Should failed with incorrect email format', async () => {
        const { getByTestId, getByText, debug } = render(
            <RenderContextAndRoutes>
                <Contact path="/" />
            </RenderContextAndRoutes>,
        );

        const submitButton = getByTestId('submit-button-mobile');
        const firstNameInput = getByTestId('first-name-input');
        const lastNameInput = getByTestId('last-name-input');
        const companyInput = getByTestId('company-input');
        const emailInput = getByTestId('email-input');
        const phoneInput = getByTestId('phone-input');
        const subjectInput = getByTestId('subject-input');
        const messageInput = getByTestId('message-input');

        fireEvent.change(firstNameInput, { target: { value: 'Liu' } });
        fireEvent.change(lastNameInput, { target: { value: 'Kang' } });
        fireEvent.change(companyInput, { target: { value: 'Earthrealm' } });
        fireEvent.change(emailInput, {
            target: { value: 'LiuKangThang@gmail' },
        });
        fireEvent.change(phoneInput, { target: { value: '911' } });
        fireEvent.change(subjectInput, { target: { value: 'Training' } });
        fireEvent.change(messageInput, { target: { value: 'Hi' } });

        fireEvent.click(submitButton);
        await waitFor(() => getByText('Incorrect email format'));
    });

    it('matches snapshot', () => {
        const contactTree = render(
            <RenderContextAndRoutes>
                <Contact path="/" />
            </RenderContextAndRoutes>,
        );

        expect(contactTree.firstChild).toMatchSnapshot();
    });
});
