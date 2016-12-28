import application = require('application');
import myModule = require('myModule');

application.config(function ($routeProvider) {
    $routeProvider.
        when('/myPage', { controller: myModule.MyPageCtrl, templateUrl: 'partials/myPage.html' }).
        otherwise({ redirectTo: '/myPage' });
});