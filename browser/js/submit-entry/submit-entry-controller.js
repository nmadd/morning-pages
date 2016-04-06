app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields, AuthService, theCookieText, $state, theLogin) {



    $scope.setCookie = function(text) {
        document.cookie = "saved_text=" + text;
    }
    $scope.textField = theCookieText;

    $scope.user = null;

    var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    $scope.user = user;
                });
            };



    //Set text-angular update and save to cookie every time key is pressed
    document.getElementById('text-angular-container').addEventListener('keydown', function(){
        $scope.setCookie($scope.textField)
    })



    $scope.fields = theEntryFields;

    $scope.hideField = SubmitEntryFactory.hideField;

    $scope.createArray = function(num) {
        return new Array(num);
    };

    $scope.addEntry = function(entryFormData) {
        console.log('Entry Form Data', entryFormData);
  
        //Delete current cookie
        document.cookie = "saved_text=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
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
            .then(function(){
                $state.go('entries')
            })


    };
    setUser();

})
