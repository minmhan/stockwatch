'use strict';

/**
 * @ngdoc function
 * @name stockwatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockwatchApp
 */
angular.module('stockwatchApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
    $scope.watchlists = WatchlistService.query();
    $scope.$watch(function () {
      return $location.path(); }, function (path) {
        if (_.contains(path, 'watchlist')) { $scope.activeView = 'watchlist';
      } else {
        $scope.activeView = 'dashboard';
      } 
    });
  });
