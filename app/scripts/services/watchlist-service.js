'use strict';

/**
 * @ngdoc service
 * @name stockwatchApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockwatchApp.
 */
angular.module('stockwatchApp')
  .service('WatchlistService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var loadModel = function(){
      var model = {
        watchlists: localStorage['StockWatch.watchlists']?
          JSON.parse(localStorage['StockWatch.watchlists']) : [],
        nextId: localStorage['StockWatch.nextId'] ?
          JSON.parse(localStorage['StockWatch.nextId']) : 0
      };
      return model;
    };

    var saveModel = function(){
      localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
      localStorage['StockDog.nextId'] = Model.nextId;
    };

    var findById = function(listId){
      return _.find(Model.watchlists, function(watchlist){
        return watchlist.id === parseInt(listId);
      });
    };

    this.query = function(listId){
      if(listId){
        return findById(listId);
      }else{
        return Model.watchlists;
      }
    };

    this.save = function(watchlist){
      watchlist.id = Model.nextId++; 
      Model.watchlists.push(watchlist); 
      saveModel();
    };

    this.remove = function(watchlist){
      _.remove(Model.watchlists, function (list) { 
        return list.id === watchlist.id;
      });
      saveModel();
    };

    var Model = loadModel();
  });
