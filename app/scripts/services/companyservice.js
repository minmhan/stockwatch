'use strict';

/**
 * @ngdoc service
 * @name stockwatchApp.CompanyService
 * @description
 * # CompanyService
 * Service in the stockwatchApp.
 */
angular.module('stockwatchApp')
  .service('CompanyService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('companies.json');
});
