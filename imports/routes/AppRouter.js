import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Link from '../ui/Link';

export const history = createHistory();
window.browserHistory = history;

export const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="/links" component={Link} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>

);