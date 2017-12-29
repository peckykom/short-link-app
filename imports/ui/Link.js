import React from "react";
import { Accounts } from 'meteor/accounts-base';

// Andrew code
//export default class Link extends React.Component {
//    render() {
//        return <p>Link component</p>
//    }
//}

// My content
//export default Link = () => <div>
//    <button onClick={() => { this.props.history.push('/'); }}>Logout</button>
//</div>;

export default class Link extends React.Component {
    onLogout(){
    Accounts.logout();
    }
    render() {
        return (
            <div>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
};