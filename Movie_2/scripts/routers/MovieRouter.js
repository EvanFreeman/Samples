define([
        'jQuery',
        'Underscore',
        'Backbone',
        'Marionette'
    ], function ($, _, Backbone) {
        return Backbone.Marionette.AppRouter.extend({
            appRoutes: {
                "": "defaultRoute" //default route handler
            }
        });
    });
