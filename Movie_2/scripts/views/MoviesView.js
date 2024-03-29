﻿define([
        'jQuery',
        'Underscore',
        'Backbone',
        'scripts/views/MovieView.js',
        'text!templates/MovieListTemplate.htm'
    ], function ($, _, Backbone, MovieView, Template) {
        return Backbone.View.extend({
            //  Don't do this:  el: $("#mainContainer") - because it will result in a bad ref instead do this:
            // el: "#mainContainer",
            template: Template,
            initialize: function () {
                this.collection.bind("reset", this.render, this);
                this.collection.bind("add", this.addOne, this);
            },
            events: { //Wire up events on teh view -these can be almost anything you like its jQuery, or underscore not sure which they are mostly the same.
                "click #butAddItem": "demoCreateOne" //I have a button in my view template that I wire an event to that adds a dummy movie for the demo.
            },
            demoCreateOne: function () {
                this.collection.add({
                    "Id": "BVP3s",
                    "Name": "Lord of the Rings ",
                    "AverageRating": 4.3,
                    "ReleaseYear": 2003,
                    "Url": "http://www.netflix.com/.....",
                    "Rating": "PG-13"
                }); //notice that I add it to the collection and the view fires the addOne function because I bound the add of the collection to trigger the render. Cool.
                console.log(this.collection.length);
            },
            render: function () {
                console.log("render");
                console.log(this.collection.length);
                $(this.el).html(this.template); //add the template to the DOM
                this.collection.each(this.addOne);
                return this;
            },
            addOne: function (model) {
                console.log("addOne");
                var view = new MovieView({ model: model });
                $("tbody", this.el).append(view.render());
            }
        });
    });
