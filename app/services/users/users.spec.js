describe('Users factory', function() {
  var Users;
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
  var singleUser = {
    id: '2',
    name: 'Kelvin',
    role: 'Developer',
    location: 'Lagos',
    twitter: 'brainyl'
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(Users.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });
});
