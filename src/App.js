import React, { useReducer } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router } from 'components/Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Context, reducer, initialState } from './store';
import reducerMiddleware from './reducerMiddleware';

const reducerState = typeof window !== 'undefined' ? window?.__INITIAL_STATE__ : initialState;
const newReducer = reducerMiddleware(reducer, reducerState, 'Medici Global Context');

import './app.css';

function App() {
    const [store, dispatch] = useReducer(newReducer, initialState);
    return (
        <Root>
            <Context.Provider value={{ store, dispatch }}>
                <Header />
                <div className="content">
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router primary={false}>
                            <ScrollToTop path="/">
                                <Routes path="*" />
                            </ScrollToTop>
                        </Router>
                    </React.Suspense>
                </div>
                <Footer />
            </Context.Provider>
        </Root>
    );
}

export default App;
