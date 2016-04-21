'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'pages/home/home.tpl.html',
            controller: 'HomeController as home'
        })
        .when('/grids', {
            templateUrl: 'pages/grids/grids.tpl.html',
            controller: 'gridsController as grids'
        })
        .when('/content', {
            templateUrl: 'pages/content/content.tpl.html',
            controller: 'contentController as content'
        })
        .when('/component', {
            templateUrl: 'pages/component/component.tpl.html',
            controller: 'componentController as component'
        })
        .when('/form', {
            templateUrl: 'pages/form/form.tpl.html',
            controller: 'formController as form'
        })
        .when('/menu', {
            templateUrl: 'pages/home/menu.tpl.html',
            controller: 'menuController as menu'
        })
        .when('/chart', {
            templateUrl: 'pages/chart/chart.tpl.html',
            controller: 'chartController as chart'
        })
        .otherwise({
            redirectTo: '/'
        });
}