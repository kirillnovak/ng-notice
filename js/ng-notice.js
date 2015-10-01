/*
 * NG-NOTICE MODULE
 * directive: <ng-notice></ng-notice>
 * Receive: 
 *  txt - text
 *  params:
 *    text - output text
 *    success - notification type, 'alert-danger' is false.
 * Response:
 *    params key-value
 *
 */

'use strict';
angular.module('ng-notice', [])
  .factory('Notice', function () {
    return {
      newNotice: function(){
        return pushNotice(text, success);
      }
    }

  }).directive('notice', function(Notice){
    return {
        restrict: 'E',
        scope: {
          scopeName: '=',
          controlName: '='
        },
        template: '<div ng-class="notice.class" class="alert" ng-repeat="notice in scopeName" ng-bind="notice.text"></div>',
        compile: function(element, attrs){
          if (!attrs.controlName) { 
            attrs.controlName = 'noticeCtrl';
          }
          if (!attrs.scopeName) { 
            attrs.scopeName = 'notice';
          }
        },
        controller: function ($scope, $rootScope, $element, $attrs, Notice) {
          $rootScope.notice = [];
          
          Notice.red = function(text){
            var text = (text || 'Error');
            console.log( $rootScope[$attrs.scopeName] )
            return $rootScope[$attrs.scopeName].push({
              'text': text,
              'success': false 
            });
          };
          Notice.green = function(text){
            var text = (text || 'Success');
            return $rootScope[$attrs.scopeName].push({
              'text': text,
              'success': true 
            });
          };
          Notice.clean = function(){
            return $rootScope[$attrs.scopeName] = [];
          };
          
          $scope.$watch(function() {
            angular.forEach($scope.scopeName, function(el){
              pushNotice(el);
            });
          });
        }
    }

    function pushNotice(el){
      el.success = (el.success || false)
      el.success ? el.class = 'alert-success' : el.class = 'alert-danger';
      el.text = (el.text.error || el.text );
    }

  }).run(function($rootScope, Notice){
    $rootScope.noticeCtrl = ($rootScope.noticeCtrl || {}); 
    
  });

