'use strict';

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/views/main.html',
        controller: 'MainCtrl'
      });
}]);

App.controller('MainCtrl', function($scope) {

  $scope.format = 'M/d/yy h:mm:ss a';

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular',
    'django-restframework',
    'django-south',
    'django-compressor'
  ];
});
