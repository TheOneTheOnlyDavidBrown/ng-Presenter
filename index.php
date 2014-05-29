<!doctype html>
<html lang="en" ng-app="app" ng-controller="mainCtrl">
<head>
  <meta charset="utf-8">
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script type="text/javascript" src="vendor/tinymce/tinymce.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"> <!--empty--></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-animate.min.js"> <!--empty--></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-sanitize.min.js"> <!--empty--></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js"></script>
  <script src='vendor/textAngular.sanitize.js'><!--empty--></script>
  <script src='vendor/textAngular.js'><!--empty--></script>
  <!-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css">
  
  <script src="app.js"><!--empty--></script>


  <script src="filters/trustashtml.js"><!--empty--></script>
  
  <script src="http://gregpike.net/demos/angular-local-storage/angular-local-storage.js"><!--empty--></script>
  
  
  <script src="factories/SlidesFactory.js"><!--empty--></script>
  <script src="factories/KeyboardManager.js"><!--empty--></script>

  <script src="controllers/mainCtrl.js"><!--empty--></script>

  <script src="directives/slidesDirective.js"><!--empty--></script>
  <script src="directives/ui-tinymce.js"><!--empty--></script>

  <style>
    html{
      height: 100%;
      background-image:url('http://subtlepatterns.com/patterns/binding_dark.png');
    }
    slides-directive{
      
      width:100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      color:white;
    }
    slides-directive .slide{
      margin:20px;
      height: 90%;
      position: absolute;
      width: 90%;
    }
    slides-directive .content{
      color:white;
      margin:0 auto;
      width:900px;
      text-align:center;
      font-size:45px
    }
    slides-directive .title{
      margin:0 auto;
      width:900px;
      text-align:center;
      font-size:55px
    }
    .slide-show-hide {
      -webkit-transition: linear 0.5s;
      -moz-transition: linear 0.5s;
      -o-transition: linear 0.5s;
      transition: linear 0.5s;
    }
     
    .slide-show-hide.ng-enter{
      opacity: -1;
    }

    .slide-show-hide.ng-enter-active{
      opacity: 1;
    }

    .slide-show-hide.ng-leave{
      opacity: 1;
    }

    .slide-show-hide.ng-leave-active{
      opacity: -1;
    }
    .navButtons{
      position: fixed;
      bottom: 20px;
      left: 10px;
    }
    .editTitle{
      width: 100%;
      height:10%;
      display:inline-block;
    }
    .editText{
      width: 100%;
      height:40%;
    }
    .navButtons{
      cursor:pointer;
    }
    .editTitle textarea{
      height: 50px;
      width: 90%;
    }

    .editText textarea{
      height: 150px;
      width: 90%;
    }
    #taTextElement{
      padding: 10px;
    }

    .slideWrapper{
      position: absolute;
      left: 500px;

    }
    .miniSlide{
      border:1px solid white;
      width:100px;
      height:100px;
    }

    .navButtons {
    // add the vendor prefixed versions as well
      transition: all 1s;
      opacity:.3;
    }

    .navButtons:hover {
      opacity: 1;
    }
  </style>

  <title>Slides</title>
</head>
<body>

  <slides-directive></slides-directive>

</body>
</body>
</html>
