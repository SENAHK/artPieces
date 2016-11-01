'use strict';

// Déclaration de l'application avec ses [dépendances]
// La seule dépendance ici est le ngRoute, un module existant qui permet le routage
var myApp = angular.module('myApp', ['ngRoute']);


//_______________Routes_________________//
myApp.config(function ($routeProvider) {
    // Routage des pages grâce au module angular 'ngRoute'
    $routeProvider.when('/albums', {
        templateUrl: 'vues/albums.html',
        controller: 'albumsController',
        title: 'Albums'
    });

    $routeProvider.when('/films', {
        templateUrl: 'vues/films.html',
        controller: 'filmsController',
        title: 'Films'
    });

    $routeProvider.when('/paintings', {
        templateUrl: 'vues/paintings.html',
        controller: 'paintingsController',
        title: 'Paintings'
    });

    $routeProvider.when('/books', {
        templateUrl: 'vues/books.html',
        controller: 'booksController',
        title: 'Books'
    });

    $routeProvider.otherwise({
        redirectTo: '/albums'
    });

});

// Au lancement de l'application (équivalent du Main)
myApp.run(function ($rootScope) {
    // Lors d'un changement de route
    $rootScope.$on('$routeChangeSuccess', function (current) {
        if (current.hasOwnProperty('$$route')) {
            $rootScope.title = current.$$route.title;
        }
    });
});

//_____________________ALBUMS CONTROLLER______________________//
/**
 * AlbumsController est le controleur des albums
 * @param 1: ($scope) obligatoire, fait le lien entre vue et controleur (data-binding)
 * @param 2: (PostFactory) est le service (ici de type factory) qu'on souhaite utiliser
 */
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