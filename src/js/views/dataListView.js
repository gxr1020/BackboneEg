var app=app||{};
(function($){
    'use strict';
    var personItemView=Backbone.View.extend({
        el:$('.m-mn'),
        events:{
            'click .newItem':'create',
            'keyup input':'search'
        },
        render:function(){
            this.renderAll();
        },
        initialize:function(){
            this.render();
            this.listenTo(this.model,'reset',this.renderAll);
            this.listenTo(this.model,'add',this.add);
            this.listenTo(this.model,'remove',this.remove)
        },
        renderOne:function(person){
            var personItemView= new app.personItemView({model:person});
            this.$('.m-list').append(personItemView.render().el);
        },
        renderAll:function(){
            app.persons.each(this.renderOne,this);
        },
        add:function(person){
            this.renderOne(person);
        },
        //？
        remove:function(contact){
            console.log(contact.cid);
        },

        create:function(){
            var contact=new app.person();//创建模型
            app.persons.add(contact);

            app.router.navigate('person/'+contact.cid+'/edit',{
                trigger:true
            });
        }

    });
    app.personItemView=personItemView;

})(jQuery);
