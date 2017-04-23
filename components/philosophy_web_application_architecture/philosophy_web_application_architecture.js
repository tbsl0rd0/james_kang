var template = require('./philosophy_web_application_architecture.html');

angular.module('philosophy_web_application_architecture', [])
.component('philosophyWebApplicationArchitecture', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
