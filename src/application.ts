import angular = require('angular');
import angularRoute = require('angular-route');
import angularResource = require('angular-resource');
import angularUiBootstrap = require('angular-ui-bootstrap');

var application = angular.module('application', ['ngRoute', 'ngResource', 'ui.bootstrap']);
export = application;