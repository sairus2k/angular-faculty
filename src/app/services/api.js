export function api($http) {
  'ngInject';

  const url = 'https://api.vk.com/method/database';
  return {
    getCities,
    getCitiesById,
    getUniversities,
    getFaculties
  };

  function getCities(q) {
    return $http.jsonp(`${url}.getCities`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        count: 3,
        q
      }
    }).then(response => response.data.response);
  }

  function getCitiesById(id) {
    return $http.jsonp(`${url}.getCitiesById`, {
      params: {
        // eslint-disable-next-line camelcase
        city_ids: id
      }
    }).then(response => response.data.response);
  }

  function getUniversities(q, cid) {
    return $http.jsonp(`${url}.getUniversities`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        // eslint-disable-next-line camelcase
        city_id: cid,
        q
      }
    }).then(response => response.data.response.splice(1));
  }

  function getFaculties(q, uid) {
    return $http.jsonp(`${url}.getFaculties`, {
      params: {
        // eslint-disable-next-line camelcase
        country_id: 1,
        // eslint-disable-next-line camelcase
        university_id: uid,
        q
      }
    }).then(response => response.data.response.splice(1));
  }
}
