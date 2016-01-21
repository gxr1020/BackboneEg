var app=app||{};
(function($){
    'use strict';
    var AppRouter=Backbone.Router.extend({
        routes:{
            '':'show',
            'person/:id':'show',
            'person/:id/edit':'edit'
        },
        show:function(id){
            console.log('刷新了',id);

        }
    });
    app.router=new AppRouter();

    Backbone.history.start();
})(jQuery);