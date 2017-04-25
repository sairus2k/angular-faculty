export const edit = {
  template: require('./edit.html'),
  controller($stateParams, Api) {
    'ngInject';

    this.edit = {};

    Api.getCitiesById($stateParams.cityId).then(cities => {
      this.edit.city = cities[0].name;
    });

    Api.getUniversities('', $stateParams.cityId).then(universities => {
      this.edit.university = universities.filter(item => item.id === Number($stateParams.universityId))[0].title;
    });

    Api.getFaculties('', $stateParams.universityId).then(universities => {
      this.edit.faculty = universities.filter(item => item.id === Number($stateParams.facultyId))[0].title;
    });
  }
};
