var app=app||{};
(function($){
    'use strict';
    var footerView=Backbone.View.extend({
        tagName:'.m-ft',
        initialize:function(){
            this.editView=new app.personEditView();
            this.detailsView=new app.personDetailsView();
        },
        render:function(){
            this.$el.append(this.editView.render().el);
            this.$el.append(this.detailsView.render().el);
            return this;
        },
        details:function(model){
            this.detailsView.$el.removeClass('f-dn');
            this.editView.$el.addClass('f-dn');
            this.detailsView.change(model);
        },
        edit:function(model){
            this.editView.$el.removeClass('f-dn');
            this.detailsView.$el.addClass('f-dn');
            this.editView.change(model);
        }
    })

    this.footerView=footerView;
})(jQuery)
