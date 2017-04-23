var template = require('./introduce_introduce.html');

angular.module('introduce_introduce', [])
.component('introduceIntroduce', {
  template: template,
  controller: function(init, $scope, lang_menu) {
    $scope.init = init;
    $scope.lang_menu = lang_menu;
  }
});
