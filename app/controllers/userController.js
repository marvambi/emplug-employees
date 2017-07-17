angular.module('emplug').controller('usersCtrl', function ($scope) {
         $scope.users = Users.all();
    });

    var Users = {};
    var userList = [
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

    Users.all = function() {
      return userList;
    };