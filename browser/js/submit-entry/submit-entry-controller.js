app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields){
	$scope.formData = {}
	$scope.deleteField = SubmitEntryFactory.deleteField;
	$scope.getIsEditable = SubmitEntryFactory.getIsEditable;
	$scope.setIsEditable = SubmitEntryFactory.setIsEditable;
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
		var newEntry = {prompt: $scope.formTitle, answer:''}
		$scope.formData.fields.push(newEntry)
		$http({
			method: "POST",
			url: "/api/add-field",
			data: newEntry
		})
		console.log(newEntry)
	}
})