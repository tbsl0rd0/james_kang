var template = require('./projects_afreecatv_glance.html');

angular.module('projects_afreecatv_glance', [])
.component('projectsAfreecatvGlance', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
