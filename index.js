var fs = require('fs')
var angular = require('angular-bsfy')

var templates = {
  login:fs.readFileSync(__dirname + '/login.html', 'utf8'),
  minilogin:fs.readFileSync(__dirname + '/minilogin.html', 'utf8'),
  userform:fs.readFileSync(__dirname + '/userform.html', 'utf8'),
  register:fs.readFileSync(__dirname + '/register.html', 'utf8'),
  accountdetails:fs.readFileSync(__dirname + '/accountdetails.html', 'utf8'),
  claim:fs.readFileSync(__dirname + '/claim.html', 'utf8'),
  combo:fs.readFileSync(__dirname + '/combo.html', 'utf8')
}

module.exports = angular
	.module('shadowfax', [
    
  ])

  .directive('shadowfaxUserForm', function(){

    return {
      restrict:'EA',
      scope:{
        messages:'=',
        title:'@',
        loginmode:'@',
        data:'=',
        submit:'='
      },
      replace:true,
      transclude:true,
      template:templates.userform,
      controller:function($scope){
        
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })

  .directive('shadowfaxLogin', function(){

    return {
      restrict:'EA',
      scope:true,
      replace:true,
      template:templates.login,
      controller:function($scope){
        $scope.data = {}
        $scope.submit = function(){
          $scope.$emit('shadowfax:login', $scope.data)
        }
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })

  .directive('shadowfaxMiniLogin', function($http){

    return {
      restrict:'EA',
      scope:true,
      replace:true,
      transclude:true,
      template:templates.minilogin,
      controller:function($scope){
        $scope.data = {}
        $scope.submit = function(){
          $scope.$emit('shadowfax:login', $scope.data)
        }
      }
    }
  })


  .directive('shadowfaxRegister', function(){

    return {
      restrict:'EA',
      scope:true,
      replace:true,
      transclude:true,
      template:templates.register,
      controller:function($scope){
        $scope.data = {}
        $scope.submit = function(){
          $scope.$emit('shadowfax:register', $scope.data)
        }
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })

  .directive('shadowfaxDetails', function(){

    return {
      restrict:'EA',
      scope:true,
      replace:true,
      transclude:true,
      template:templates.accountdetails,
      controller:function($scope){
        $scope.data = {}
        $scope.submit = function(){
          $scope.$emit('shadowfax:save', $scope.data)
        }
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })

  .directive('shadowfaxCombo', function(){

    return {
      restrict:'EA',
      scope:true,
      replace:true,
      template:templates.combo,
      controller:function($scope){
        
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })