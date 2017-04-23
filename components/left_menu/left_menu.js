require('./left_menu.less');
var template = require('./left_menu.html');

angular.module('left_menu', [])
.component('leftMenu', {
  template: template,
  controller: function(init, $scope, lang_menu, left_menu) {
    $scope.init = init;
    $scope.lang_menu = lang_menu;
    $scope.left_menu = left_menu;

    $scope.stop_propagation = function() {
      event.stopPropagation();
    };

    $scope.menu_items = [
      {
        korean_title: '소개',
        english_title: 'Introduce',
        sub_items: [
          {
            korean_title: '소개',
            english_title: 'Introduce',
            url: '/introduce/introduce'
          },
          {
            korean_title: '성격',
            english_title: 'Personality',
            url: '/introduce/personality'
          }
        ],
        is_active: 1
      },
      {
        korean_title: '프로젝트',
        english_title: 'Projects',
        sub_items: [
          {
            korean_title: 'afreecatv_glance',
            english_title: 'afreecatv_glance',
            url: '/projects/afreecatv_glance'
          },
          {
            korean_title: 'overmatch',
            english_title: 'overmatch',
            url: '/projects/overmatch'
          },
          {
            korean_title: 'james_kang',
            english_title: 'james_kang',
            url: '/projects/james_kang'
          },
          {
            korean_title: 'smart_auth',
            english_title: 'smart_auth',
            url: '/projects/smart_auth'
          },
          {
            korean_title: 'siscom',
            english_title: 'siscom',
            url: '/projects/siscom'
          },
          {
            korean_title: 'white_home',
            english_title: 'white_home',
            url: '/projects/white_home'
          }
        ],
        is_active: -1
      },
      {
        korean_title: '철학',
        english_title: 'Philosophy',
        sub_items: [
          {
            korean_title: '네이밍',
            english_title: 'Naming',
            url: '/philosophy/naming'
          },
          {
            korean_title: '웹앱 아키텍쳐',
            english_title: 'Web app archi',
            url: '/philosophy/web_application_architecture'
          },
          {
            korean_title: '반응형 웹',
            english_title: 'Reactive web',
            url: '/philosophy/reactive_web'
          },
          {
            korean_title: '라이브러리 사용',
            english_title: 'Using library',
            url: '/philosophy/using_library'
          },
          {
            korean_title: '웹 보안',
            english_title: 'Web security',
            url: '/philosophy/web_security'
          }
        ],
        is_active: -1
      }
    ];

    $scope.inactivate_other_menus = function($index) {
      for (var i in $scope.menu_items) {
        if (i == $index) {
          continue;
        }

        $scope.menu_items[i].is_active = -1;
      }
    };

    left_menu.toggle_left_menu = function() {
      left_menu.is_active = left_menu.is_active * -1;
    };

    left_menu.inactivate_left_menu = function() {
      left_menu.is_active = -1;
    };
  }
})
.factory('left_menu', function() {
  return {
    is_active: -1
  };
})
.config(function($routeProvider) {
  $routeProvider
  .when('/introduce/introduce', {
    template: '<introduce-introduce></introduce-introduce>'
  })
  .when('/introduce/personality', {
    template: '<introduce-personality></introduce-personality>'
  })
  .when('/projects/afreecatv_glance', {
    template: '<projects-afreecatv-glance></projects-afreecatv-glance>'
  })
  .when('/projects/overmatch', {
    template: '<projects-overmatch></projects-overmatch>'
  })
  .when('/projects/james_kang', {
    template: '<projects-james-kang></projects-james-kang>'
  })
  .when('/projects/smart_auth', {
    template: '<projects-smart-auth></projects-smart-auth>'
  })
  .when('/projects/siscom', {
    template: '<projects-siscom></projects-siscom>'
  })
  .when('/projects/white_home', {
    template: '<projects-white-home></projects-white-home>'
  })
  .when('/philosophy/naming', {
    template: '<philosophy-naming></philosophy-naming>'
  })
  .when('/philosophy/web_application_architecture', {
    template: '<philosophy-web-application-architecture></philosophy-web-application-architecture>'
  })
  .when('/philosophy/reactive_web', {
    template: '<philosophy-reactive-web></philosophy-reactive-web>'
  })
  .when('/philosophy/using_library', {
    template: '<philosophy-using-library></philosophy-using-library>'
  })
  .when('/philosophy/web_security', {
    template: '<philosophy-web-security></philosophy-web-security>'
  })
  .otherwise({
    redirectTo: '/introduce/introduce'
  });
});
