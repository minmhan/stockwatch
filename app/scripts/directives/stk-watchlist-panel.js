'use strict';

/**
 * @ngdoc directive
 * @name stockwatchApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockwatchApp')
  .directive('stkWatchlistPanel', function ($location, $modal, $routeParams, WatchlistService) {
    return {
      templateUrl: 'views/templates/watchlist-panel.html',
      restrict: 'E',
      scope:{},
      link: function($scope){
        $scope.watchlist = {};
        $scope.currentList = $routeParams.listId;

        $scope.gotoList = function(listId){
          $location.path('watchlist/' + listId);
        };

        var addListModal = $modal({
          scope:$scope,
          template:'views/templates/addlist-modal.html',
          show:false
        });

        $scope.watchlists = WatchlistService.query();

        $scope.showModal = function(){
          addListModal.$promise.then(addListModal.show);
        };

        $scope.createList = function () {
          WatchlistService.save($scope.watchlist); addListModal.hide();
          $scope.watchlist = {};
        };

        $scope.deleteList = function (list) {
          WatchlistService.remove(list);
          $location.path('/'); };
        }
    };
  });
