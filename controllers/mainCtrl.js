myApp.controller('mainCtrl',['$scope','localStorageService',function($scope, localStorageService){
  $scope.getRandomSpan = function(){
    return Math.floor((Math.random()*999999999999));
  };
}]);