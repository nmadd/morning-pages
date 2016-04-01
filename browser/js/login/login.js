app.config(function($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function($scope, AuthService, $state, $http) {

    $scope.login = {};
    $scope.error = null;

    $scope.googleLogin = function() {
        $http({
            method: "GET",
            url: '/auth/google'
        })
    }

    $scope.sendLogin = function(loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function() {
            $state.go('entries');
        }).catch(function() {
            $scope.error = 'Invalid login credentials.';
        });

    };

});
