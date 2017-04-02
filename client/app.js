(function(window, angular, undefined){
    angular.module('app',['ui.router', 'ngMaterial'])
        .config(['$urlRouterProvider', '$stateProvider','$mdThemingProvider', function($urlRouterProvider, $stateProvider,$mdThemingProvider){
        
        $stateProvider
            .state('home',{
              url: '/',
              templateUrl: '/client/components/home/home.html',
              controller: 'homeCtrl'
            })
        
        //$urlRouterProvider.otherwise('/');
        }])
})(window, window.angular)