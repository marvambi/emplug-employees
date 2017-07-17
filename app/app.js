(function() {
  'use strict';

  angular.module('emplug', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('user', {
        url: "/user/:id",
        templateUrl: './services/users/user.html',
        //adding: uID + 1,
        controller: function($scope, $rootScope){
          $scope.users = [{
                id: '1',
                name: 'Marvin',
                role: 'Architect',
                location: 'Abuja',
                twitter: 'marvambi'
              },
              {
                id: '2',
                name: 'Kelvin',
                role: 'Developer',
                location: 'Lagos',
                twitter: 'brainyl'
              },
              {
                id: '3',
                name: 'Genevieve',
                role: 'Developer',
                location: 'Enugu',
                twitter: 'genibabi'
              },
              {
                id: '4',
                name: 'Chuka',
                role: 'Designer',
                location: 'Abia',
                twitter: 'Chucks'
              }];
            
        }
    });
    $urlRouterProvider.otherwise("/");
  }).controller('usersCtrl', function ($scope, $rootScope) {
          $rootScope.tack = function (inde) {
            $rootScope.uID = inde + 1;
          };
          $scope.$on("$destroy", function(){
            console.log($rootScope.uID);
          });
         $scope.users = [
              {
                id: '1',
                name: 'Marvin',
                role: 'Architect',
                location: 'Abuja',
                twitter: 'marvambi'
              },
              {
                id: '2',
                name: 'Kelvin',
                role: 'Developer',
                location: 'Lagos',
                twitter: 'brainyl'
              },
              {
                id: '3',
                name: 'Genevieve',
                role: 'Developer',
                location: 'Enugu',
                twitter: 'genibabi'
              },
              {
                id: '4',
                name: 'Chuka',
                role: 'Designer',
                location: 'Abia',
                twitter: 'Chucks'
              }
            ];
    });
})();
