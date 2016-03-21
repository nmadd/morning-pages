app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields){
	$scope.formData = {}
	$scope.deleteField = SubmitEntryFactory.deleteField;
	$scope.formData.fields = theEntryFields.map(function(field){
		return {prompt: field.prompt, answer: field.data}
	});
	$scope.submitEntry = function(){
		$http({
			method: "POST",
			url: "/api/submit-entry",
			data: $scope.formData.fields
		})
	}
	$scope.addEntry = function(){
		var newEntry = {prompt: $scope.prompt, answer:''}
		$scope.formData.fields.push(newEntry)
		$http({
			method: "POST",
			url: "/api/add-field",
			data: newEntry
		})
	}
})