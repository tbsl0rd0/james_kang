var template = require('./philosophy_web_security.html');

angular.module('philosophy_web_security', [])
.component('philosophyWebSecurity', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
