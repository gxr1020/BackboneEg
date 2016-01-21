var app=app||{};
(function($){
    'use strict';
    var personItemView=Backbone.View.extend({
        tagName:'li',
        template: _.template($('#tpl-item').html()),
        events:{
            'click':'select'
        },
        initialize:function(){
            console.log(this);
            //_.bindAll(this,'select');
            //老写法
            //this.model.bind('reset',this.render,this);
            this.listenTo(this.model,'reset',this.render);
            this.listenTo(this.model,'change',this.render);
            this.listenTo(this.model,'destroy',this.remove);
        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        select:function(){
            app.router.navigate('person/'+this.model.cid,{
                tirigger:true ///执行相应方法
            })
        }
    });
    app.personItemView=personItemView;

})(jQuery);
