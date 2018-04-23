import {Session} from "meteor/session";
import {Template} from "meteor/templating";

import './dashboard.html';
if(Meteor.isClient){
    Template.dashboard.events({
        'click .logout': function(event){
            event.preventDefault();
            Session.set('page', 'login');
            Meteor.logout();
        }
    });
}