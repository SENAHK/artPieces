'use strict';
var myApp = angular.module('myApp', ['ngRoute']);


//_______________Routes_________________//
myApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/albums', {
        templateUrl: 'vues/albums.html',
        controller: 'albumsController'
    });

    $routeProvider.when('/films', {
        templateUrl: 'vues/films.html',
        controller: 'filmsController'
    });

    $routeProvider.when('/paintings', {
        templateUrl: 'vues/paintings.html',
        controller: 'paintingsController'
    });

    $routeProvider.when('/books', {
        templateUrl: 'vues/books.html',
        controller: 'booksController'
    });

    $routeProvider.otherwise({
        redirectTo: '/albums'
    });
});

//_____________________ALBUMS CONTROLLER______________________//
myApp.controller('albumsController', function ($scope, $http) {

    $scope.albums = {};

    $http.post('dbRequetes/getAlbums.php').success(function (data) {
        $scope.albums = data;
    });

});

//_____________________PAINTINGS CONTROLLER______________________//
myApp.controller('paintingsController', function ($scope, $http) {
    $scope.paintings = {};

    $http.post('dbRequetes/getPaintings.php').success(function (data) {
        $scope.paintings = data;
    });

});

//_____________________BOOKS CONTROLLER______________________//
myApp.controller('booksController', function ($scope, $http) {
    $scope.paintings = {};

    $http.post('dbRequetes/getPaintings.php').success(function (data) {
        $scope.paintings = data;
    });

});

//_____________________FILMS CONTROLLER______________________//
myApp.controller('filmsController', function ($scope, $http) {
    $scope.films = {};


    $http.post('dbRequetes/getFilms.php').success(function (data) {
        $scope.films = data;
    });

});