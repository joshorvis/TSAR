define(["require", "exports", "angular", "testFeature.module"], function (require, exports, angular) {
    "use strict";
    angular.module('testFeature')
        .directive("betaTesting", function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var htmlText = "Hello world #2";
                element.html(htmlText);
            }
        };
    });
});
//# sourceMappingURL=sampleWidget.js.map