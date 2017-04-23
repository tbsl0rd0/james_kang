var template = require('./projects_smart_auth.html');

angular.module('projects_smart_auth', [])
.component('projectsSmartAuth', {
  template: template,
  controller: function(init, $scope, lang_menu) {
    $scope.init = init;
    $scope.lang_menu = lang_menu;
  }
});
