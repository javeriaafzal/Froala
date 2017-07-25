(function () {
    "use strict";
   
   
    var modules = [
        
      
        "FroalaTestconst"
        
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
 
        $rootScope.froala = function () {
            console.log("init");
            $("textarea").froalaEditor();
        };
        
        $rootScope.froala();
        console.log("init");


    }
})();
angular.module('FroalaTestconst', [])

.constant('CONST_WATGXRESTAPIURL', 'http://testdev00.teknita.com/watgApi/api')

.constant('CONST_RESOURCEURL', 'http://testdev00.teknita.com/resources.watg.com/')

.constant('CONST_LOGSENABLED', true)

.constant('CONST_W1_STAFF_PROFILE_URL', 'http://itstage.watg.com/watg1/#teamMemberDetails/')

;