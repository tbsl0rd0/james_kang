var template = require('./projects_overmatch.html');

angular.module('projects_overmatch', [])
.component('projectsOvermatch', {
  template: template,
  controller: function(init, $scope, lang_menu) {
    $scope.init = init;
    $scope.lang_menu = lang_menu;
  }
});
