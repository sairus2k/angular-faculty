export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('city', {
      url: '/',
      views: {city: {component: 'city'}}
    })
    .state('city.university', {
      url: ':cityId/',
      views: {'university@': {component: 'university'}}
    })
    .state('city.university.faculty', {
      url: ':universityId/',
      views: {'faculty@': {component: 'faculty'}}
    })
    .state('city.university.faculty.edit', {
      url: ':facultyId',
      views: {'edit@': {component: 'edit'}}
    });
}
