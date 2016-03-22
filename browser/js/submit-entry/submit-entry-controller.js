app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields){
	$scope.fields = theEntryFields;
	$scope.createArray  = function(num){
		return new Array(num);
	}
	$scope.addField = function(){
		var newField = {
			prompt: $scope.prompt, 
			date: new Date(), 
			answer_lines: $scope.number_answers,
			answer_type: $scope.answer_type
		};
		$http({
			method: "POST",
			url: "/api/fields/",
			data: newField
		})
	}
})