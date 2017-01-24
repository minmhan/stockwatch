'use strict';

/**
 * @ngdoc service
 * @name stockwatchApp.QuoteService
 * @description
 * # QuoteService
 * Service in the stockwatchApp.
 */
angular.module('stockwatchApp')
  .service('QuoteService', function ($http, $interval) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var stocks = [];
    var BASE = "http://query.yahooapis.com/v1/public/yql";

    var update = function(quotes){
      if(quotes.length === stocks.length){
        _.each(quotes, function(quote, idx){
          var stock = stocks[idx];
          stock.listPrice = parseFloat(quote.LastTradePriceOnly);
          stock.change = quote.Change;
          stock.percentChange = quote.ChangeinPercent;
          stock.marketValue = stock.shares * stock.lastPrice;
          stock.dayChange = stock.shares * parseFloat(stock.change);
          stock.save();
        });
      }
    };
  });
