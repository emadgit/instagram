import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './reducers';

export default ({ children, initialState={} }) => {
    return (
        <Provider store={createStore(Reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            {children}
        </Provider>
    )
}