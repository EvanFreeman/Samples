define([
        'jQuery',
        'Underscore',
        'Backbone',
        'text!templates/MovieItemTemplate.htm'
    ], function ($, _, Backbone, MovieItemTemplate) {
        return Backbone.View.extend({
            tagName: "tr", //this specifies the tag to create when we render the view, if not specified creates a div.
            template: _.template(MovieItemTemplate), //I use underscore here because in the render method I need an underscore object to do the templateing stuf.
            initialize: function () {
                _.bindAll(this, 'render');
            },
            render: function () {
                return $(this.el).append(this.template(this.model.toJSON()));
            }
        });
    });
