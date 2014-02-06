'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    },
    {
        'title': 'To Do Entries',
        'link': 'entries'
    }, {
        'title': 'Create New To Do Entries',
        'link': 'entries/create'
    }
    ];
    
    $scope.isCollapsed = false;
}]);