define([
        'jQuery',
        'Underscore',
        'Backbone',
         'scripts/views/MoviesView.js',
        'scripts/views/PageHeaderView.js',
        'scripts/views/SidebarView.js',
        'scripts/collections/MoviesCollection.js',
        'scripts/views/layout.js',
        'Marionette'
    ], function ($, _, Backbone, MoviesView, PageHeaderView, SidebarView, MoviesCollection, Layout) {
        return {
            defaultRoute: function () {
                console.log("defaultRoute");

                //setup the layout
                var layout = new Layout();
                App.mainRegion.show(layout);

                //initialize the movie list view
                var movies = new MoviesCollection();
                var movieListView = new MoviesView({ collection: movies });
                movies.fetch();

                //add the views to the regions of the layout
                layout.content.show(movieListView);
                layout.pageheader.show(new PageHeaderView());
                layout.sidebar.show(new SidebarView());
                
                //say hello to everyone console
                console.log(movieListView.collection.length);
            }
        };
    });
