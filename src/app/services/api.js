export function api($http) {
  'ngInject';

  const url = 'https://api.vk.com/method/database';
  return {
    getCities,
    getUniversities,
    getFaculties
  };

  function getCities(q) {
    return $http.jsonp(`${url}.${getCities.name}`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        count: 3,
        q
      }
    }).then(response => response.data.response);
  }

  function getUniversities(q, cid) {
    return $http.jsonp(`${url}.${getUniversities.name}`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        // eslint-disable-next-line camelcase
        city_id: cid,
        count: 5,
        q
      }
    }).then(response => response.data.response.splice(1));
  }

  function getFaculties(q, uid) {
    return $http.jsonp(`${url}.${getFaculties.name}`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        // eslint-disable-next-line camelcase
        university_id: uid,
        count: 5,
        q
      }
    }).then(response => response.data.response.splice(1));
  }
}
