var template = require('./projects_james_kang.html');

angular.module('projects_james_kang', [])
.component('projectsJamesKang', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
