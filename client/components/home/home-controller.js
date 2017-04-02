(function(window, angular, undefined){
    angular.module('app')
        .controller('homeCtrl',['$scope','$log',function($scope,$log){
            $scope.homeData = {
                pageName: 'Home'
            }
            
            $log.debug("homeCtrl is online");
        }])
})(window, window.angular)