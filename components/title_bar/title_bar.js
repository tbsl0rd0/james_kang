require('./title_bar.less');
var template = require('./title_bar.html');

angular.module('title_bar', [])
.component('titleBar', {
  template: template,
  controller: function(init, $scope) {
    $scope.init = init;
  }
});
