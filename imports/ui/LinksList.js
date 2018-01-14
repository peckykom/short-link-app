import React from "react";
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";
import { Links } from "../api/links";

export default class LinksList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links:[]
        };
        console.log("props", props);
        console.log(this.state);
    };
    componentDidMount(){
        console.log("componentDidMount LinksList");
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            console.log("links", links);
            this.setState({ links });
        });
    }
    componentWillUnmount(){
        console.log("componentWillUnmount LinksList");
        this.linksTracker.stop();
    }
    renderLinkListItem(){
        return this.state.links.map((link)=>{
            console.log(this.state);
           return <p key={link._id}>{link.url}</p>;
        })
    }
    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinkListItem()}
                </div>
            </div>
        )
    }
}