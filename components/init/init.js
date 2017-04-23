angular.module('init', [])
.component('init', {
  controller: function(init) {
    if (/ko/i.test(navigator.language)) {
      init.lang = 'korean';
    }

    if (screen.width < 992) {
      init.is_small = true;
    }
  }
})
.factory('init', function() {
  return {
    lang: 'english',
    is_small: false
  };
});
