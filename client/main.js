import { Meteor } from "meteor/meteor";
import ReactDOM from 'react-dom';
import React from 'react';
import { Tracker } from "meteor/tracker";
import { AppRoutes, onAuthChange } from '../imports/routes/routes';

Tracker.autorun(() => {
    const isAuthenticaced = !!Meteor.userId();
    onAuthChange(isAuthenticaced);
});

Meteor.startup(() => {
    ReactDOM.render(<AppRoutes/>, document.getElementById("app"));
});