var app=app||{};
(function($){
    'use strict';
    var personEditView=Backbone.View.extend({
        className:'eidt',
        template: _.template($('#tpl-edit').html()),
        events:{
            'click .saveItem':'save',
            'click .deleItem':'dele'
        },
        initialize:function(){

        },
        render:function(){
            if(this.model){
                this.$el.html(this.template(this.model.toJSON()));
            }
            return this;
        },
        change:function(model){
            this.model=model;
            this.render();
        },
        save:function(){
            this.model.set(this.getData());
            this.item.save()//发送//跟服务器相关
            app.router.navigate('person/'+this.model.cid,{
                trigger:true
            });
        },
        getData:function(){
            return {
                name:this.$('#name').val(),
                email:this.$('#email').val(),
                sex:this.$('#sex').val()
            }
        },
        dele:function(){
            this.model.destory();//跟服务器相关
            this.model=null;
            app.router.navigate('',{
                trigger:true
            })
        },

    })

    this.personEditView=personEditView;
})(jQuery)

