export const faculty = {
  template: require('./faculty.html'),
  controller($stateParams, Api) {
    'ngInject';
    this.searchUpdate = () => {
      Api.getFaculties(this.search, $stateParams.universityId).then(faculties => {
        this.faculties = faculties;
      });
    };

    this.state = $stateParams;
  }
};
