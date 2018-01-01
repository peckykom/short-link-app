import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Tracker } from "meteor/tracker";

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

export const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Login} exact={true} onEnter={Tracker.autorun(onEnterPublicPage)}/>
            <Route path="/signup" component={Signup} onEnter={Tracker.autorun(onEnterPublicPage)}/>
            <Route path="/links" component={Link} onEnter={Tracker.autorun(onEnterPrivatePage)}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);