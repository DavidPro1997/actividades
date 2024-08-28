// Creación del módulo
var app = angular.module('mvevip', ['ngRoute']);

// Configuración de las rutas
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'vuelos.html',
            controller : 'VuelosController'
        })
        .when('/vuelos', {
            templateUrl : 'vuelos.html',
            controller : 'VuelosController'
        })
        .when('/reserva', {
            templateUrl : 'reserva.html',
            controller : 'ReservaController'
        })
        .when('/micuenta', {
            templateUrl : 'micuenta.html',
            controller : 'MicuentaController'
        })
        .when('/configuracion', {
            templateUrl : 'configuracion.html',
            controller : 'ConfiguracionController'
        })
        .when('/resumen', {
            templateUrl : 'resumen.html',
            controller : 'ResumenController'
        })
        .when('/actividades', {
            templateUrl : 'actividades.html',
            controller : 'ActividadesController'
        })
        .when('/detallesActividad', {
            templateUrl : 'detallesActividad.html',
            controller : 'DetallesActividadController'
        })
        .when('/destino', {
            templateUrl : 'destino.html',
            controller : 'DestinoController'
        })
        .when('/carrito', {
            templateUrl : 'carrito.html',
            controller : 'CarritoController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

// Definir controladores (pueden estar en archivos separados)
app.controller('VuelosController', ['$scope', function($scope) {
    $scope.message = 'Bienvenido a los vuelos';
}]);

app.controller('MicuentaController', ['$scope', function($scope) {
    $scope.message = 'Datos de mi cuenta';
}]);

app.controller('ConfiguracionController', ['$scope', function($scope) {
    $scope.message = 'Configuracion de mi cuenta';
}]);

app.controller('ReservaController', ['$scope', function($scope) {
    $scope.message = 'Reserva de mi vuelo';
}]);

app.controller('ResumenController', ['$scope', function($scope) {
    $scope.message = 'Resumen de mi vuelo';
}]);

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