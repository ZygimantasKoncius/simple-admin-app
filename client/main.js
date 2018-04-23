import {Template} from 'meteor/templating';
import { Session } from 'meteor/session';
import 'bootstrap-sass';

import '../imports/ui/logreg.js';
import '../imports/ui/dashboard.js';
import './main.html';

if (Meteor.isClient) {
    Template.body.helpers({
        showLogin(){
            return Session.equals('page', 'login');
        }
    });
}
