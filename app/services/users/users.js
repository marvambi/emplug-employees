(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('Users', function() {
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

    Users.findById = function(id) {
      return userList.find(function(user) {
        return user.id === id;
      });
    };

    return Users;
  });
})();
