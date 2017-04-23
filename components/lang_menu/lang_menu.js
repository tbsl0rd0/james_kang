require('./lang_menu.less');
var template = require('./lang_menu.html');

angular.module('lang_menu', [])
.component('langMenu', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
})
.factory('lang_menu', function(init) {
  return {
    lang: init.lang
  };
});
