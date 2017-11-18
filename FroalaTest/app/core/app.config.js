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
        $rootScope.Description = "kgkghkgh";
        $rootScope.saveCategory = function() {
            console.log($rootScope.Description);
        };

        $rootScope.froala = function () {
            console.log("init");
            $("textarea").froalaEditor();
            
        };
        
        $rootScope.froala();
        console.log($rootScope.Description);


    }
})();