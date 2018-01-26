'use strict';

angular.module("Routes", ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when("/i40", {
        templateUrl: "partials/i40.html",
        controller: "i40Controller"
      })
      .when("/parkway", {
        templateUrl: "partials/parkway.html",
        controller: "parkwayController"
      });
  });