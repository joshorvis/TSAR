require.config({
    baseUrl: './dist',
    paths: {
        angular: '../node_modules/angular/angular'
    },
    shim: {
        'angular': { 'exports': 'angular' }
    }
});
require([
    'angular',
    'app'
], function (angular, app) {
    'use strict';
    var $html = document.getElementsByTagName('body')[0];
    angular.bootstrap($html, [app.app['name']]);
});
//# sourceMappingURL=main.js.map