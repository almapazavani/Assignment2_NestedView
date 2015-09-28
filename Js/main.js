var app = angular.module('routerApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
      .state('state1', {
          url: "/state1",
          templateUrl: "state1.html"
      })
      .state('state2', {
          url: "/state2",
          templateUrl: "state2.html"
      });
});

