import reactDom from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import routes from './router'
import configureStore from './store/configureStore'


const store=configureStore();

reactDom.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
