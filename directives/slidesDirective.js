myApp.directive('slidesDirective',['SlidesFactory','KeyboardManager',function(SlidesFactory,KeyboardManager){
  return {
    restrict:'AE',
    templateUrl:'templates/slide.html',
    link: function link(scope, element, attrs) {

      scope.enableKeyShortcuts = function(){
        KeyboardManager.bind('left', function() {
          if (!scope.showEdit) {
            scope.back();
            console.log('back');
          }
        });
        

        KeyboardManager.bind('right', function() {
          scope.forward();
          console.log('forward');
        });

      };

      scope.disableKeyShortcuts = function(){
        KeyboardManager.unbind('left');
        KeyboardManager.unbind('right');
      };

      scope.enableKeyShortcuts();
      
    },
    controller: ['$scope',function(scope){
      
      scope.fullScreen = !window.screenTop && !window.screenY;

      scope.slides = SlidesFactory.getSlides();
      scope.floatStyle={float:'none'};

      scope.editMode = false;

      scope.enterEditMode = function(){
        scope.editMode = true;
        scope.disableKeyShortcuts();
        scope.floatStyle={float:'right'};
      };

      scope.exitEditMode = function(){
        SlidesFactory.saveSlidesLocal(scope.slides);
        scope.editMode = false;
        scope.enableKeyShortcuts();
        scope.floatStyle={float:'none'};
      };
      
      scope.forward = function(){
        console.log('scope.showingIndex',scope.showingIndex)
        console.log('scope.slides',scope.slides)
        if (scope.slides.length > scope.showingIndex+1) {
          if (scope.showingIndex+1>0 && scope.showingIndex+1 < scope.slides.length) {
            scope.slides[scope.showingIndex].show=false;
            scope.showingIndex++;
            scope.slides[scope.showingIndex].show=true;
            console.log('showingIndex', scope.showingIndex);
            scope.editMode = false;
          }
        }
      };

      scope.back = function(){
        console.log('scope.showingIndex',scope.showingIndex)
        if (scope.showingIndex>0) {
          scope.showingIndex--;

          scope.slides[scope.showingIndex+1].show=false;
          scope.slides[scope.showingIndex].show=true;
          scope.editMode = false;
        }
      };

      scope.delete = function(){
        console.log('delete', scope.showingIndex);
        scope.slides.splice(scope.showingIndex,1);
        if (scope.slides[scope.showingIndex-1]) {
          scope.showingIndex--;
        }
        else if(scope.slides[scope.showingIndex+1]){
          scope.showingIndex++;
        }
        else{
          scope.slides[scope.showingIndex] = {
            "order":scope.showingIndex+1,
            "title":"<span style='color:red'>NEW</span>",
            "text":"NEW SLIDE",
            "show":true
          }
        }
        SlidesFactory.saveSlidesLocal(scope.slides);
        scope.slides[scope.showingIndex].show=true;
        console.log(scope.slides);
        scope.editMode = false;
      };

      scope.add = function(){
        //hide current slide
        

        angular.forEach(scope.slides, function(slide, index){
          console.log(index);
          if(slide.order>=scope.showingIndex+1){
            scope.slides[index].order++;

          }
        });

        scope.slides.splice(scope.showingIndex+1, 0, {
          "order":scope.getRandomSpan(),
          "title":"NEW",
          "text":"NEW SLIDE"
        });
        scope.slides[scope.showingIndex].show=false;
        scope.showingIndex++;
        scope.slides[scope.showingIndex].show=true;
        scope.editMode=true;
        SlidesFactory.saveSlidesLocal(scope.slides);
      };

      scope.moveForward = function(){
        if (scope.slides[scope.showingIndex+1]) {
        
          var b = scope.slides[scope.showingIndex];
          scope.slides[scope.showingIndex] = scope.slides[scope.showingIndex+1];
          scope.slides[scope.showingIndex+1] = b;
          scope.showingIndex++;
          scope.editMode = false;
        }
      };
      scope.moveBack = function(){
        if (scope.slides[scope.showingIndex-1]) {
          var b = scope.slides[scope.showingIndex];
          scope.slides[scope.showingIndex] = scope.slides[scope.showingIndex-1];
          scope.slides[scope.showingIndex-1] = b;
          scope.showingIndex--;
          scope.editMode = false;
        }
      };

      scope.showingIndex=0;


    }]
  }
}]);