var template = require('./philosophy_reactive_web.html');

angular.module('philosophy_reactive_web', [])
.component('philosophyReactiveWeb', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
