app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields){

	$scope.entryFormData = {};

	$scope.entryFormModel = {};


	$scope.fields = theEntryFields;

	$scope.hideField = SubmitEntryFactory.hideField;

	$scope.createArray  = function(num){
		return new Array(num);
	};

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
	};

	$scope.addEntry = function(entryFormData){
		var entryKeys = Object.keys(entryFormData);
		var fields = entryKeys.map(function(key){
			return entryFormData[key];
		});
		var newEntry = {
			date: new Date(),
			fields: fields
		};
		console.log('Form data',entryFormData);
		console.log('new entry',newEntry);
		$http({
			method: "POST",
			url: "/api/entries/",
			data: newEntry
		})
	};
})