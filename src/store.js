import React from 'react';

export const initialState = { isMobile: true };

export const reducer = (state, action) => {
    switch (action.type) {
        case 'setDesktopLayout':
            return { ...state, isMobile: false };
        case 'setMobileLayout':
            return { ...state, isMobile: true };
        default:
            return state;
    }
};

export const Context = React.createContext();
