import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from 'react-dom';
import { AppRouter, history } from '.././imports/routes/AppRouter';
import { Tracker } from "meteor/tracker";

Tracker.autorun(() => {
    const isAuthenticaced = !!Meteor.userId();
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
});


Meteor.startup(() => {
    ReactDOM.render(<AppRouter />, document.getElementById("app"));
});