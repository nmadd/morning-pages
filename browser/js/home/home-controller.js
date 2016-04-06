app.controller('HomeController', function($scope){
	$scope.showMenu = false;

	$scope.styleTest = '4em'

    $scope.toggle = function(){
        console.log('toggleys')
        $scope.showMenu = !$scope.showMenu;
    }

    $scope.test = "TEST";

})