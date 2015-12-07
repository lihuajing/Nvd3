'use strict';

/**
 * @ngdoc overview
 * @name nvd3App
 * @description
 * # nvd3App
 *
 * Main module of the application.
 */
angular
    .module('nvd3App', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'nvd3'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/template/common/page.html',
                headerUrl: 'views/template/common/header.html',
                mainUrl: 'views/homePage/page/main.html',
                footerUrl: 'views/template/common/footer.html',
                controller: 'HomePageCtrl',
                controllerAs: 'HomePage'
            })
            .when('/:chartName', {
                templateUrl: 'views/template/common/page.html',
                headerUrl: 'views/template/common/header.html',
                sidebarUrl: 'views/template/common/sidebar.html',
                mainUrl: 'views/chartPage/page/main.html',
                footerUrl: 'views/template/common/footer.html',
                controller: 'ChartPageCtrl',
                controllerAs: 'ChartPage'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    .controller('RootCtrl', ['$scope', '$route',
        function ($scope, $route) {
            console.log($route.current);
        }]);