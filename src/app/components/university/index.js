export const university = {
  template: require('./university.html'),
  controller($stateParams, Api) {
    'ngInject';
    this.searchUpdate = () => {
      Api.getUniversities(this.search, $stateParams.city_id).then(universities => {
        this.universities = universities;
      });
    };
  }
};
