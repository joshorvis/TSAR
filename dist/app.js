define(["require", "exports", "angular", "angular", "testFeature.sampleWidget"], function (require, exports, angular) {
    "use strict";
    exports.app = angular.module("mainApp", ['testFeature'], function () { });
    exports.app.directive("testing", function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var htmlText = "Hello world";
                element.html(htmlText);
            }
        };
    });
});
//# sourceMappingURL=app.js.map