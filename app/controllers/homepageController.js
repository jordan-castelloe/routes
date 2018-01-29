'use strict';

angular.module("Routes").controller("HomepageCtrl", function ($scope) {
$scope.homepageLinks = [
  {
    name: "The Blue Ridge Parkway",
    url: "partials/i40.html"
  },
  {
    name: "Interstate 40",
    url: "partials/parkway.html"
  }
];
});