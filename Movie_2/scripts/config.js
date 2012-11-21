var App = {}; //this is the global app object. Used to assign global things like the router to be accessible everywhere.

//prevent errors in IE when console is not present.
window.console||(window.console={log:function(){}});

require.config({
    paths: {
        jQuery: '../public/jquery/jquery.min',
        Underscore: '../Public/underscore/underscore-min',
        Backbone: '../Public/backbone/backbone-min',
        Bootstrap: '../Public/bootstrap/js/bootstrap.min',
        text: '../Public/require/text',
        templates: '../templates',
       Marionette: '../Public/marionette/backbone.marionette',
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
        'scripts/routers/movierouter.js',
        'scripts/controllers/moviecontroller.js',
         'scripts/routers/miscrouter.js',
        'scripts/controllers/misccontroller.js'
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
