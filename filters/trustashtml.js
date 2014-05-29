myApp.filter('unsafe', function($sce) {
    return function(value) {
        return $sce.trustAsHtml(value);
    };
});