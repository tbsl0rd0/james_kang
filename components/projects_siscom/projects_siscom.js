var template = require('./projects_siscom.html');

angular.module('projects_siscom', [])
.component('projectsSiscom', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
