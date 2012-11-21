define([
        'jQuery',
        'Underscore',
        'Backbone',
        'Bootstrap',
        'text!templates/SidebarTemplate.htm'
    ], function ($, _, Backbone, Bootstrap, SidebarTemplate) {
        return Backbone.View.extend({
            template: SidebarTemplate, //notice I'm not using under score, why? no need this is just a trait up piece of marckup no data fill. 
            render: function () {
                //$(this.el).empty(); //Because of marionette we don't need to do this it is already doing it on show. 
                $(this.el).append(this.template);
                return this;
            }
        });
    });
