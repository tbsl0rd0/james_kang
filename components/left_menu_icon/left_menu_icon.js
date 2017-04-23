require('./left_menu_icon.less');
var template = require('./left_menu_icon.html');

angular.module('left_menu_icon', [])
.component('leftMenuIcon', {
  template: template,
  controller: function($scope, left_menu) {
    $scope.left_menu = left_menu;

    $scope.toggle_left_menu = function() {
      event.stopPropagation();

      left_menu.toggle_left_menu();
    };
  }
});
