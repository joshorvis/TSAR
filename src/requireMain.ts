/// <reference path="_declare/require.d.ts" />
/// <reference types="angular-resource" />
/// <reference types="angular-ui-bootstrap" />

require.config({
    baseUrl: './js',
    paths: {
        'jquery': '/node_modules/jquery/dist/jquery',
        'angular': '/node_modules/angular/angular',
        'angular-route': '/node_modules/angular-route/angular-route',
        'angular-resource': '/node_modules/angular-resource/angular-resource',
        'angular-ui-bootstrap': '/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls'
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { exports: 'angular', deps: ['jquery'] }, //
        'angular-route': { exports: 'angular-route', deps: ['angular'] },
        'angular-resource': { exports: 'angular-resource', deps: ['angular'] },
        'angular-ui-bootstrap': { exports: 'angular-ui-bootstrap', deps: ['angular'] }
    }
});

// TypeScript declarations useful for importing angular modules
/*declare module 'angular' {
    var angular: ng.IAngularStatic;
    export = angular;
}*/
declare module 'angular-route' {
}
declare module 'angular-resource' {
}
declare module 'angular-ui-bootstrap' {
}

require([ 'angular', 'angular-route','angular-resource','angular-ui-bootstrap',
        'application', 'routes'],
    function (angular: ng.IAngularStatic, angularRoute,
              application, routes) {

            angular.bootstrap(document, ['application']);

    });