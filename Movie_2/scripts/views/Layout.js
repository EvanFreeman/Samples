define([
        'jQuery',
        'Underscore',
        'Backbone',
        'text!templates/LayoutTemplate.htm',
        'Marionette'
    ], function($, _, Backbone, LayoutTemplate) {
       return Backbone.Marionette.Layout.extend({
           template: LayoutTemplate,
           regions: {
               pageheader: "#page-header",
               content: "#mainContainer",
               sidebar: "#sidebar"
           }
        });
    });
