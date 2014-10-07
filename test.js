var angular = require('angular-bsfy')
var shadowfax = require('./')

var app = angular.module('MyApp',[
    shadowfax.name
])
.controller('MyCtrl', function($scope){
	$scope.login = {
		success:'/',
		endpoint:'/auth/login'
	}

	$scope.register = {
		success:'/',
		endpoint:'/auth/register'
	}
})