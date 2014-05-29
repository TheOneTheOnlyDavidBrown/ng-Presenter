myApp.factory('SlidesFactory',['$http','localStorageService',function($http,localStorageService){
  return {
      getSlides: function() {
          //localStorageService.remove('localSlides')
          return localStorageService.get('localSlides') ? localStorageService.get('localSlides') : [{
            "order":"0",
            "title":"<span style='color:red'>NEW</span>",
            "text":"NEW SLIDE",
            "show":true,
          }];
          // return $http.get('slides.json')
          //   .success(function(data){
          //     //console.log('data: ',data);
          //     return data;
          // });
      },

      saveSlidesLocal: function (slides) {
        
        //loops through to reset the show variable to false
        var saveSlides = angular.copy(slides);
        angular.forEach(saveSlides, function(slide,index){
          saveSlides[index].show = false;
        });

        //sets the first slide to show
        saveSlides[0].show=true;

        //saves to local storage
        localStorageService.add('localSlides',saveSlides);
      }
  };
}]);