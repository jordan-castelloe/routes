'use strict';

angular.module("Routes", ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        templateUrl: "homepage.html",
        controller: "homepageCtrl"
      })
      .when("/i40", {
        templateUrl: "partials/i40.html",
        controller: "i40Ctrl"
      })
      .when("/parkway", {
        templateUrl: "partials/parkway.html",
        controller: "ParkwayCtrl"
      })
      .otherwise("/");
  });