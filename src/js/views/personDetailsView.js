var app=app||{};
(function($){
    'use strict';
    var personDetailsView=Backbone.View.extend({
        className:'details',
        template: _.template($('#tpl-details').html()),
        events:{
            'click .edit':'edit'
        },
        initialize:function(){

        },
        render:function(model){
            if(this.model){
                this.$el.html(this.template(this.model.toJSON()));
            }
            return this;
        },
        change:function(model){
            this.model=model;
            this.render();
        },
        edit:function(){
            if(this.model){
                app.router.navigate('person/'+this.model.cid+'/edit',{
                    tirigger:true ///执行相应方法
                })
            }
        }
    })

    this.personDetailsView=personDetailsView;
})(jQuery)
