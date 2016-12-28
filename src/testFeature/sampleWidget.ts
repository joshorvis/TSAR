/// <amd-dependency path="testFeature.module" />

import angular = require("angular");

angular.module('testFeature')
    .directive("betaTesting",function(){
        return{
            restrict: 'EA',
            link:function(scope,element,attrs) {
                var htmlText = "Hello world #2";
                element.html(htmlText);
            }
        }
    });