var template = require('./introduce_personality.html');

angular.module('introduce_personality', [])
.component('introducePersonality', {
  template: template,
  controller: function($scope, lang_menu) {
    $scope.lang_menu = lang_menu;
  }
});
