app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, theEntryFields, AuthService, theCookieText, $state) {

    $scope.entryFormData = {};

    $scope.entryFormModel = {};

    $scope.setCookie = function(text) {
        document.cookie = "saved_text=" + text;
    }
    $scope.textField = theCookieText;

    // var timer = null;

    //Set text-angular update and save to cookie every time key is pressed
    document.getElementById('text-angular-container').addEventListener('keydown', function(){
        $scope.setCookie($scope.textField)
    })

    // function doStuff(text) {
    //     console.log('do stuff', text);
    //     $scope.setCookie(text)
    // }

    // function saveText(text){
    //     clearTimeout(timer);
    //     timer = setTimeout(doStuff(text), 1000)
    // }

    // function getText(){
    //     return $scope.getCookie;
    // }

    // function getCookies() {
    //     console.log(document.cookie);
    //     return document.cookie.substring(5);
    // }

    // $scope.getCookie = getCookies();




    $scope.isLoggedIn = function() {
        return AuthService.isAuthenticated();
        $scope.$digest();
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
})
