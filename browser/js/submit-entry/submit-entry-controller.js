app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields, AuthService) {

    $scope.entryFormData = {};

    $scope.entryFormModel = {};

    $scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

    $scope.fields = theEntryFields;

    $scope.hideField = SubmitEntryFactory.hideField;

    $scope.createArray = function(num) {
        return new Array(num);
    };

    // $scope.addField = function() {
    //     var newField = {
    //         prompt: $scope.prompt,
    //         date: new Date(),
    //         answer_lines: $scope.number_answers,
    //         answer_type: $scope.answer_type
    //     };
    //     $http({
    //         method: "POST",
    //         url: "/api/fields/",
    //         data: newField
    //     })
    // };

    $scope.addEntry = function(entryFormData) {
        console.log('Entry Form Data', entryFormData);
    	// var entryKeys = Object.keys(entryFormData);
     //    var fields = entryKeys.map(function(key) {
     //        return entryFormData[key];
     //    });

        AuthService.getLoggedInUser()
            .then(function(user) {
               
                var newEntry = {
                    user: user._id,
                    date: new Date(),
                    text: entryFormData
                };
                $http({
                    method: "POST",
                    url: "/api/entries/",
                    data: newEntry
                })
            })


    };
})
