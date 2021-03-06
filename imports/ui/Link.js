import React from "react";
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';
import { Meteor } from 'meteor/meteor';


export default class Link extends React.Component {
    onLogout() {
        Accounts.logout();
    }
    onSubmit(e) {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if(url){
          Links.insert({url, userId: Meteor.userId()});
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
                <LinksList/>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add link</button>
                </form>
            </div>
        );
    }
};