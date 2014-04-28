var templates = {
  login:require('./login'),
  register:require('./register'),
  accountdetails:require('./accountdetails'),
  claim:require('./claim'),
  combo:require('./combo')
}

var modulename = module.exports = 'shadowfax'

angular
	.module(modulename, [
    
  ])

  .directive('shadowfaxLogin', function(){

    return {
      restrict:'EA',
      scope:{
        success:'=',
        endpoint:'='
      },
      replace:true,
      template:templates.login,
      controller:function($scope){

      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })


  .directive('shadowfaxRegister', function(){

    return {
      restrict:'EA',
      scope:{
        success:'=',
        endpoint:'='
      },
      replace:true,
      template:templates.register,
      controller:function($scope){
        
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })


  .directive('shadowfaxCombo', function(){

    return {
      restrict:'EA',
      scope:{
        success:'=',
        login_endpoint:'=',
        register_endpoint:'='
      },
      replace:true,
      template:templates.combo,
      controller:function($scope){
        
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })


  .directive('shadowfaxAccountDetails', function(){

    return {
      restrict:'EA',
      scope:{
        success:'=',
        endpoint:'='
      },
      replace:true,
      template:templates.accountdetails,
      controller:function($scope){
        
      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })
