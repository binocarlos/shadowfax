shadowfax
=========

angular login/register and general account related directives - works well with [gandalf](https://github.com/binocarlos/gandalf)

## install

```
$ component install binocarlos/shadowfax
```

## usage

Shadowfax assumes bootstrap markup and that you have angular loaded onto your page.

```html
<body ng-app="MyApp" ng-controller="MyCtrl">
<h3>Login</h3>

<shadowfax-login 
	success="login.success" 
	endpoint="login.endpoint" />

<h3>Register</h3>

<shadowfax-register 
	success="register.success" 
	endpoint="register.endpoint" />

<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.15/angular.min.js"></script>
<script src="build.js"></script>
<script>
	require('myapp')
</script>
```

Then - in your component:

```js
var modulename = module.exports = 'MyApp'
angular.module('MyApp', [
	require('shadowfax')
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
```

## license

MIT