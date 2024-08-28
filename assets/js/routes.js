// Creación del módulo
var app = angular.module('mvevip', ['ngRoute']);

// Configuración de las rutas
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'default/actividades/destino.html',
            controller : 'DestinoController'
        })
        
        .when('/actividades', {
            templateUrl : 'default/actividades/actividades.html',
            controller : 'ActividadesController'
        })
        .when('/detallesActividad', {
            templateUrl : 'default/actividades/detallesActividad.html',
            controller : 'DetallesActividadController'
        })
        .when('/destino', {
            templateUrl : 'default/actividades/destino.html',
            controller : 'DestinoController'
        })
        .when('/carritoActividades', {
            templateUrl : 'default/actividades/carrito.html',
            controller : 'CarritoController'
        })
        .when('/reservasActividad', {
            templateUrl : 'default/actividades/reservasActividad.html',
            controller : 'ReservasActividadController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

// Definir controladores (pueden estar en archivos separados)
app.controller('ActividadesController', ['$scope', function($scope) {
    $scope.message = 'Bienvenido a las actividades';
}]);

app.controller('DetallesActividadController', ['$scope', function($scope) {
    $scope.message = 'Bienvenido a los detalles de la actividad';
}]);

app.controller('DestinoController', ['$scope', function($scope) {
    $scope.message = 'Bienvenido a los destinos';
}]);

app.controller('CarritoController', ['$scope', function($scope) {
    $scope.message = 'Bienvenido a tu carrito';
}]);

app.controller('ReservasActividadController', ['$scope', function($scope) {
    $scope.message = 'Bienvenido a tus reservas';
}]);
