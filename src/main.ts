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
        var $html = document.getElementsByTagName('body')[0];
   // $html.createAttribute('ng-app');
        angular.bootstrap($html, [app.app['name']]);
        // Because of RequireJS we need to bootstrap the app app manually
        // and Angular Scenario runner won't be able to communicate with our app
        // unless we explicitely mark the container as app holder
        // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ

});