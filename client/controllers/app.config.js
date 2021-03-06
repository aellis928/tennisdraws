myApp.constant('API_URL', 'http://54.186.88.86');

myApp.run(function($rootScope, $location, $route, AuthTokenFactory){
    // we use the AuthTokenFactory to bounce users from routes they
    // should not be at
    $rootScope.$on('$routeChangeStart', function(event, next, current){
      if(!AuthTokenFactory.getToken()){
        $location.path('/');
      }
    });
});
