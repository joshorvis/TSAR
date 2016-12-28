define(["require", "exports"], function (require, exports) {
    "use strict";
    var angular = require("angular");
    exports.app = angular.module("mainApp", [], function () { });
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