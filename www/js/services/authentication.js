var app = angular.module('mealtrack.services.authentication', []);

app.service('AuthService', function ($q, $ionicPopup) {
	var self = {
		user: Parse.User.current(),
		login: function (email, password) {
			var d = $q.defer();

			//TODO

			return d.promise;
		},
		signup: function (email, name, password) {
			var d = $q.defer();

			var user = new Parse.User();
			user.set('username', email);
			user.set('name', name);
			user.set('password', password);
			user.set('email', email);

			user.signUp(null,{
				success: function(user) {
					console.log('Account Created');
					self.user = user;
					d.resolve(self.user);
				},
				error: function(user) {
					$ionicPopup.alert({
						title:'Signup Error',
						subTitle:error.message
					});
					d.reject(error);
				}
			});

			return d.promise;
		},
		'update': function (data)  {
			var d = $q.defer();

			//TODO

			return d.promise;
		}

	};

	return self;
})
;

