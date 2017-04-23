var template = require('./philosophy_naming.html');

angular.module('philosophy_naming', [])
.component('philosophyNaming', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
