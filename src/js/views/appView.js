var app=app||{};
(function($){
    'use strict';
    var personDetailsView=Backbone.View.extend({
        tagName:'.g-warp',

        initialize:function(){
            this.dataListView=new app.dataListView({
                model:this.model
            });
            this.footerView=new app.footerView();

            this.render();
        },
        render:function(){
            this.$el.append()
        }
    })

    personItemView
})(jQuery)

