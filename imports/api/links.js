import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor';

export const Links = new Mongo.Collection('links');

//console meteor to object
//require('meteor/meteor').Meteor;

if (Meteor.isServer) {
    Meteor.publish('links',() =>{
       return Links.find({url: '2'});
    });
}


