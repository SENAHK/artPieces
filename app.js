'use strict';
var myApp = angular.module('myApp', ['ngRoute']);


//_______________Routes_________________//
myApp.config(function ($routeProvider) {
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

myApp.controller('albumsController', function ($scope, $http) {
    $scope.albums = {};

    $http.post('dbRequetes/getAlbums.php').success(function (data) {
        // Stored the returned data into scope
        $scope.albums = data;
        console.log($scope.albums);
    });

});