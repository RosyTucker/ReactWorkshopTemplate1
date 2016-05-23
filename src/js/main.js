import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Router from './Router';
import reducers from './common/reducers';

import '../sass/main.scss';

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : func => func
    )
);

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app')
);
