/// <reference types="requirejs" />
/// <reference types="angular" />

/// <amd dependency-path="angular" />

var angular = require("angular");

export var app = angular.module("mainApp",[],function(){});

app.directive("testing",function(){
    return{
        restrict: 'EA',
        link:function(scope,element,attrs) {
            var htmlText = "Hello world";
            element.html(htmlText);
        }
    }
});