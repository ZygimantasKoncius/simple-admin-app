import {Session} from "meteor/session";
import {Template} from "meteor/templating";

import "./logreg.html"

if(Meteor.isClient){
    Session.setDefault('page', 'login');
    Session.setDefault('logErr', 'false');

    Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            var usernameVar = event.target.registerUsername.value;
            var passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                username: usernameVar,
                password: passwordVar
            });
        },
        'click .loglink': function (event) {
            Session.set('page', 'login');
        }
    });
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var usernameVar = event.target.loginUsername.value;
            var passwordVar = event.target.loginPassword.value;
            try{
                Meteor.loginWithPassword(usernameVar, passwordVar);
            }
            catch (e) {
                Session.set('logErr', 'true');
            }
        },
        'click .reglink': function (event) {
            Session.set('page', 'register');
        }
    });
}