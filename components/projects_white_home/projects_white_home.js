var template = require('./projects_white_home.html');

angular.module('projects_white_home', [])
.component('projectsWhiteHome', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
