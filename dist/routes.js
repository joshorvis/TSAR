define(["require", "exports", "application", "myModule"], function (require, exports, application, myModule) {
    "use strict";
    application.config(function ($routeProvider) {
        $routeProvider.
            when('/myPage', { controller: myModule.MyPageCtrl, templateUrl: 'partials/myPage.html' }).
            otherwise({ redirectTo: '/myPage' });
    });
});
//# sourceMappingURL=routes.js.map