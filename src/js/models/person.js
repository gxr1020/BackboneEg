var app = app || {};

(function () {
    'use strict';
    var person = Backbone.Model.extend({
        defaults: {
            name: "",
            sex: "",
            email: ""
        },
        search: function (key) {
            if (typeof(key) == 'undefined' || key == null || key == '') return true;
            key = key.toLowerCase();
            var name = this.get('name').toLowerCase(),
                sex = this.get('sex').toLowerCase(),
                email = this.get('email').toLowerCase();
            return name.indexOf(key) != -1 ||
                sex.indexOf(key) != -1 ||
                email.indexOf(key) != -1;
        }
    });
    app.person=person;
})();
