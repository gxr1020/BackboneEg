var app = app || {};
    (function () {
        'use strict';
        var persons = Backbone.Collection.extend({
            model: app.person,
            //localStorage: new Backbone.LocalStorage('persons-data')
        });
        var data = [{
            name: 'gxr1',
            sex: '男',
            email: '1223@qq.com'
        }, {
            name: 'gxr2',
            sex: '女',
            email: '166@qq.com'
        }, {
            name: 'gxr312',
            sex: '男',
            email: '1777@qq.com'
        }];
        app.persons = new persons(data);
    })();

