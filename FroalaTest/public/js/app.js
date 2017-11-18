(function() {
    "use strict";


    var modules = [
        "FroalaTestconst",
        "froala"
    ];
    var app = angular.module("FroalaTest", modules);
}());
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
angular.module('FroalaTestconst', [])

.constant('CONST_WATGXRESTAPIURL', 'http://testdev00.teknita.com/watgApi/api')

.constant('CONST_RESOURCEURL', 'http://testdev00.teknita.com/resources.watg.com/')

.constant('CONST_LOGSENABLED', true)

.constant('CONST_W1_STAFF_PROFILE_URL', 'http://itstage.watg.com/watg1/#teamMemberDetails/')

;