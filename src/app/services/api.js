export function api($http) {
  'ngInject';

  const url = 'https://api.vk.com/method/database';
  return {
    getCities
  };

  function getCities(q) {
    return $http.jsonp(`${url}.${getCities.name}`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        count: 3,
        q
      }
    }).then(response => {
      return response.data.response;
    });
  }
}
