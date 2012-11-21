define([
        'jQuery',
        'Underscore',
        'Backbone',
        'Marionette'
    ], function ($, _, Backbone) {
        return Backbone.Marionette.AppRouter.extend({
            appRoutes: {
                "tellBob": "bobAlert", //this is for demo purposes, add #tellBob at the end of the url and see what happens. Think anchor tags with an href that changes the url
                "nameAlert/:name": "alertName"
            }
        });
    });
