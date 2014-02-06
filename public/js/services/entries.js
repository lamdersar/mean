'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.entries').factory('Entries', ['$resource', function($resource) {
    return $resource('entries/:entryId', {
        entryId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);