app.controller('HomeController', function($scope, $timeout){
	$scope.showMenu = false;
	$scope.triggerAnimation = true;

	$scope.styleTest = '4em'

    $scope.toggle = function(){
        console.log('toggleys')
       $scope.showMenu = !$scope.showMenu;
    }



})