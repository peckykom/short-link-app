import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Link from '../ui/Link';

// Meteor.userId() - if user logged in

export const history = createHistory();
window.browserHistory = history;

const onEnterPublicPage = ()=> {
    if (Meteor.userId()) {
        console.log("user logged in");
        history.replace('/links');
    }
};

const onEnterPrivatePage = ()=> {
    if (!Meteor.userId()) {
        console.log("user not logged in");
        history.replace('/');
    }
};

export const onAuthChange = ( isAuthenticaced )=> {
    const pathname = history.location.pathname;

    const unauthenticatedPages = ['/', '/signup'];
    const authenticatedPages = ['/links'];

    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    console.log("isAuthenticaced", isAuthenticaced);
    console.log("pathname", pathname);

    if (isUnauthenticatedPage && isAuthenticaced) {
        history.replace('/links');
        console.log("private page - user logged in");
    } else if (isAuthenticatedPage && !isAuthenticaced) {
        history.replace('/');
        console.log("public page - user logged out");
    }
};

export const AppRoutes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Login} exact={true} onEnter={(onEnterPublicPage)}/>
            <Route path="/signup" component={Signup} onEnter={(onEnterPublicPage)}/>
            <Route path="/links" component={Link} onEnter={(onEnterPrivatePage)}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);