import React from 'react'
import App from './containers/App/App' ;
import { Route, IndexRoute } from 'react-router';
import Page404 from './containers/404/404';
import Home from './containers/Home/home'

export default (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            {/*<Route path="users" component={Users}>*/}
                {/*<Route path="/user/:userId" component={User}/>*/}
            {/*</Route>*/}
            <Route status={404} path="*" component={Page404}/>
        </Route>
);
