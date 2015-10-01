/*
var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
*/
///

var app = angular.module('notice-demo', [
  // 'ui.bootstrap',
  'ng-notice'
]);

app.run(function($rootScope){
  $rootScope.notifications = [];
});

app.controller('MainCtrl', function(
  $scope,
  Notice
) {
  $scope.notice = Notice;

  /*
  $scope.notice = function(){
    Notice.red('Show red notice')
  }
 */
   
});

