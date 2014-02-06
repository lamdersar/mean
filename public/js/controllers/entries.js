// 'use strict';

// angular.module('mean.entries').controller('EntriesController', ['$scope', '$routeParams', '$location', 'Global', 'Entries', function ($scope, $routeParams, $location, Global, Entries) {
//     $scope.global = Global;

//     $scope.create = function() {
//         var entry = new Entries({
//             content: this.content;
//         });
//         entry.$save(function(response) {
//             $location.path('');//response._id);
//         });

//         this.content = '';
//     };

//     $scope.remove = function(entry) {
//         if (entry) {
//             entry.$remove();

//             for (var i in $scope.entries) {
//                 if ($scope.entries[i] === entry) {
//                     $scope.entries.splice(i, 1);
//                 }
//             }
//         }
//         else {
//             $scope.entry.$remove();
//             $location.path('entries');
//         }
//     };

//     $scope.update = function() {
//         var entry = $scope.entry;
//         if (!entry.updated) {
//             entry.updated = [];
//         }
//         entry.updated.push(new Date().getTime());

//         entry.$update(function() {
//             $location.path('entries/' + entry._id);
//         });
//     };

//     $scope.find = function() {
//         Entries.query(function(entries) {
//             $scope.entries = entries;
//         });
//     };

//     $scope.findOne = function() {
//         Entries.get({
//             entryId: $routeParams.entryId
//         }, function(entry) {
//             $scope.entry = entry;
//         });
//     };
// }]);
'use strict';

angular.module('mean.entries').controller('EntriesController', ['$scope', '$routeParams', '$location', 'Global', 'Entries', function ($scope, $routeParams, $location, Global, Entries) {
    $scope.global = Global;

    $scope.create = function() {
        var article = new Entries ({
            content: this.content
        });
        article.$save(function(response) {
            $location.path('entries/');
        });
        console.log(article);
        this.content = '';
    };

    $scope.remove = function(entry) {
        if (entry) {
            entry.$remove();

            for (var i in $scope.entries) {
                if ($scope.entries[i] === entry) {
                    $scope.entries.splice(i, 1);
                }
            }
        }
        else {
            $scope.entry.$remove();
            $location.path('entries');
        }
    };

    $scope.update = function() {
        var entry = $scope.entry;
        if (!entry.updated) {
            entry.updated = [];
        }
        entry.updated.push(new Date().getTime());

        entry.$update(function() {
            $location.path('entries/');
        });
    };

    $scope.find = function() {
        Entries.query(function(entries) {
            $scope.entries = entries;
        });
    };

    $scope.findOne = function() {
        console.log("hellos");
        Entries.get({
            entryId: $routeParams.entryId
        }, function(entry) {
            $scope.entry = entry;
        });
    };

    $scope.done = function(entry) {
        entry.done = true;
        entry.$update(function() {
            $location.path('entries/');
        });
    };
}]);