var App = {}; //this is the global app object. Used to assign global things like the router to be accessible everywhere.

//prevent errors in IE when console is not present.
window.console||(window.console={log:function(){}});

Packages = undefined;

require.config({
	paths: {
        jQuery: '../public/jquery/jquery.min',
        Underscore: '../public/underscore/underscore-min',
        Backbone: '../public/backbone/backbone-min',
        Bootstrap: '../public/bootstrap/js/bootstrap.min',
        text: '../public/require/text',
        templates: '../templates',
       Marionette: '../public/marionette/backbone.marionette',
    },
    shim: {
        'Moment': {
            exports: 'moment'
        },
        'Bootstrap': ['jQuery'],
        'jQuery': {
            exports: '$'
        },
        'Underscore': {
            exports: '_'
        },
        'Backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['Underscore', 'jQuery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
         "Marionette" : {
              deps: ['Backbone', 'Underscore'],
              exports : "Backbone.Marionette"
         }
    }
});

require(
    [
        'jQuery',
        'Underscore',
        'Backbone',
        'Bootstrap',
        'scripts/routers/MovieRouter.js',
        'scripts/controllers/MovieController.js',
         'scripts/routers/MiscRouter.js',
        'scripts/controllers/MiscController.js'
    ],
    function ($, _, Backbone, Bootstrap, MovieRouter, MovieController, MiscRouter, MiscController) {
        console.log('config');
         $.ajaxSetup({ cache: false }); //this is supposed to disable javascript caching.

        App = new Backbone.Marionette.Application();
        App.addRegions({
            mainRegion: "#main"
        });

        App.MovieRouter = new MovieRouter({
            controller: MovieController
        }); 

        App.MiscRouter = new MiscRouter({
            controller: MiscController
        });

        Backbone.history.start();
    }
);
