export default httpConfig;

function httpConfig($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(($q, $rootScope) => ({
    request(config) {
      $rootScope.$emit('request');
      return config || $q.when(config);
    },
    response(response) {
      $rootScope.$emit('response');
      return response || $q.when(response);
    },
    responseError(rejection) {
      $rootScope.$emit('response');
      return $q.reject(rejection);
    }
  }));
}
