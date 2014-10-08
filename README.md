shadowfax
=========

angular login/register form directives - works well with [gandalf](https://github.com/binocarlos/gandalf)

## install

Install the module to your project:

```
$ npm install shadowfax --save
```

Include it in your app.js:

```js
var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')

var app = angular.module('myApp',[
    shadowfax.name
])
```

Then compile with [browserify](https://github.com/substack/node-browserify) and [brfs](https://github.com/substack/brfs):

```bash
$ browserify -t brfs app.js > bundle.js
```

## usage

Shadowfax directives use bootstrap markup - use them inside a controller that includes the shadowfax module.

```js
var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')

var app = angular.module('myApp',[
    shadowfax.name
])

app.controller('MyCtrl', function($scope){
	$scope.$on('shadowfax:login', function($ev, data){
		// handle login with data.username & data.password
	})
})
```

Then you can use shadowfax directives from your pages:

```html
<body ng-app="MyApp" ng-controller="MyCtrl">
<h3>Login</h3>

<div>
	<shadowfax-login />
</div>

<h3>Register</h3>

<div>
	<shadowfax-register>

		<!--
			You can transclude extra form items into the register form
			Set the model to be property of data
		 -->
		<div class="form-group">
      <label class="col-md-2 control-label" for="extra">Extra</label>
      <div class="col-md-8">
        <input type="text" class="form-control" id="extra" name="extra" placeholder="Confirm Password" ng-model="data.extra" required>
      </div>
    </div>

	</shadowfax-register>
</div>

<script src="build.js"></script>
</body>
```

## directives

#### `shadowfax-login`

Show a login form with username & password fields.

#### `shadowfax-mini-login`

Show a compact login form with username & password fields.

#### `shadowfax-register`

Show a register form with username, email & password fields.

It will render these fields automatically:

 * username
 * email
 * password

The register directive is transcluded so you can pass extra form fields into it.

#### `shadowfax-details`

Show a details form that is the same as the register form but will update a shadowfax:save event instead.

It is transcluded like the register form.

## events

Listen to these events in the scope to handle the backend logic how you want.

##### `$on('shadowfax:login', function($ev, data){})`

Called when the `login` button is pressed - data is an object:

```js
{
	username:"bob",
	password:"password"
}
```

An example of hooking up custom logic to deal with the login event:

```js
app.controller('MyCtrl', function($scope, $http){
	$scope.$on('shadowfax:login', function($ev, data){
		$http({
			url:'/auth/login',
			method:'POST',
			data:data
		})
		.success(function(data){
			// user has logged in
		})
		.error(function(data){
			// problem
		})
	})
})
```

##### `$on('shadowfax:register', function($ev, data){})`

Called when the `register` button is pressed - data is an object:

```js
{
	username:"bob",
	fullname:"Bob Bob",
	email:"bob@bob.com",
	password:"password"
}
```

An example of hooking up custom logic to deal with the login event:

```js
app.controller('MyCtrl', function($scope, $http){
	$scope.$on('shadowfax:register', function($ev, data){
		$http({
			url:'/auth/register',
			method:'POST',
			data:data
		})
		.success(function(data){
			// user has registered
		})
		.error(function(data){
			// problem
		})
	})
})
```

##### `$on('shadowfax:save', function($ev, data){})`

Called when the details form is saved - essentially the same as register but used for an existing user to update their details.

## license

MIT