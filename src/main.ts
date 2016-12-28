require.config({
    baseUrl: './dist',
    paths: {
        angular: '../node_modules/angular/angular'
    },
    shim: {
        'angular' : {'exports' : 'angular'}
    }
});

// This is boilerplate
require( [
    'angular',
    'app'
], function(angular, app) {
    'use strict';
        // Because of RequireJS we need to bootstrap the app app manually
        let $html = document.getElementsByTagName('body')[0];
        angular.bootstrap($html, [app.app['name']]);

});