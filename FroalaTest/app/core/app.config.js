(function () {
    var app = angular.module("FroalaTest");
    app.config([appConfig]);
    app.run([
        "$rootScope", appRun
    ]);

    function appConfig() {
       
    }

    function appRun($rootScope
        ) {
 
        $rootScope.froala = function () {
            console.log("init");
            $("textarea").froalaEditor();
        };
        
        $rootScope.froala();
        console.log("init");


    }
})();