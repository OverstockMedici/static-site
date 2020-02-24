const withDevTools = (
    process.env.NODE_ENV === 'development'
    && typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION__
);
let devTools;

const reducerMiddleware = (reducer, initialState, name = 'React.context') => {
    if (withDevTools) {
        devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({ name });
        devTools.init(initialState);
    }
    return (state, action) => {
        const newState = reducer(state, action);
        if (withDevTools) {
            devTools.send(action, newState);
        }
        return newState;
    };
};

export default reducerMiddleware;
