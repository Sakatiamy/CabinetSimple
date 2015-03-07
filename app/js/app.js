'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.controllers',
    'myApp.services',
    'myApp.version'
]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/medecins', {
                    templateUrl: 'templates/medecins.html',
                    controller: 'medecinsCtrl'
                });
                $routeProvider.when('/patients', {
                    templateUrl: 'templates/patients.html',
                    controller: 'patientsCtrl'
                });
                $routeProvider.when('/consultations', {
                    templateUrl: 'templates/consultations.html',
                    controller: 'consultationsCtrl'
                });
                $routeProvider.when('/secretaires', {
                    templateUrl: 'templates/secretaires.html',
                    controller: 'secretairesCtrl'
                });
                $routeProvider.when('/salles', {
                    templateUrl: 'templates/salles.html',
                    controller: 'sallesCtrl'
                });
                $routeProvider.when('/specialites', {
                    templateUrl: 'templates/specialites.html',
                    controller: 'specialitesCtrl'
                });
                $routeProvider.when('/home', {
                    templateUrl: 'templates/home.html'
                });
                $routeProvider.otherwise({redirectTo: '/home'});
            }]);
