import './city.css';

export const city = {
  template: require('./city.html'),
  controller(Api) {
    'ngInject';
    this.searchUpdate = () => {
      Api.getCities(this.search).then(cities => {
        this.cities = cities;
      });
    };
  }
};
