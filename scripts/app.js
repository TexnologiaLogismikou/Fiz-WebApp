angular.module('fiz', ['ngRoute'])
    .config(function ($routeProvider, $httpProvider) {

        $routeProvider.when('/login', {
            templateUrl: '/log.html',
            controller: 'navigation'
        }).otherwise('/')
            .run();

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    })

    .controller('navigation',

        function ($rootScope, $scope, $http, $location) {

            var authenticate = function (credentials, callback) {

                //TODO use simplified send method
                var headers = credentials ? {
                    authorization: "Basic "
                    + btoa(credentials.username + ":" + credentials.password)
                } : {};
                //endof todo

                $http.get('user', {headers: headers}).success(function (data) {
                    if (data.name) {
                        $rootScope.authenticated = true;
                    } else {
                        $rootScope.authenticated = false;
                    }
                    callback && callback();
                }).error(function () {
                    $rootScope.authenticated = false;
                    callback && callback();
                });
            };

            authenticate();
            $scope.credentials = {};
            $scope.login = function () {
                authenticate($scope.credentials, function () {
                    if ($rootScope.authenticated) {
                        $location.path("/");
                        $scope.error = false;
                    } else {
                        $location.path("/login");
                        $scope.error = true;
                    }
                });
            };
        });