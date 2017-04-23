var template = require('./philosophy_using_library.html');

angular.module('philosophy_using_library', [])
.component('philosophyUsingLibrary', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
