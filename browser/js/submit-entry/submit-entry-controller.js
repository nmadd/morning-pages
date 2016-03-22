app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields){
	$scope.test = 'test'
	$scope.formData = {}
	$scope.deleteField = SubmitEntryFactory.deleteField;
	$scope.addField = SubmitEntryFactory.addField;
	// $scope.formData.fields = theEntryFields.map(function(field){
	// 	return {prompt: field.prompt, answer: field.data}
	// });
	$scope.submitEntry = function(){
		$http({
			method: "POST",
			url: "/api/submit-entry",
			data: $scope.formData.fields
		})
	}
	$scope.addField = function(){
		var newField = {
			prompt: $scope.prompt, 
			date: new Date(), 
			answer_lines: $scope.number_answers
		};
		console.log(newField)
		// $scope.formData.fields.push(newEntry)
		// $http({
		// 	method: "POST",
		// 	url: "/api/add-field",
		// 	data: newEntry
		// })
	}
})