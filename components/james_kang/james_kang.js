var template = require('./james_kang.html');

angular.module('james_kang', [
  'init',
  'ngRoute',
  'lang_menu',
  'left_menu',
  'title_bar',
  'left_menu_icon',
  'projects_siscom',
  'philosophy_naming',
  'projects_overmatch',
  'introduce_introduce',
  'projects_james_kang',
  'projects_smart_auth',
  'projects_white_home',
  'introduce_personality',
  'philosophy_reactive_web',
  'philosophy_web_security',
  'philosophy_using_library',
  'projects_afreecatv_glance',
  'philosophy_web_application_architecture'
])
.component('jamesKang', {
  template: template,
  controller: function(init, $scope, left_menu) {
    $scope.init = init;
    $scope.left_menu = left_menu;
  }
});
