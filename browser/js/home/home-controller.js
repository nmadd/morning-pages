app.controller('HomeController', function($scope){
	$scope.showMenu = false;

    $scope.toggle = function(){
        console.log('toggleys')
        $scope.showMenu = !$scope.showMenu;
    }

    $scope.test = "TEST";

})