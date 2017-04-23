import './city.css';

export const city = {
  template: require('./city.html'),
  controller() {
    this.searchUpdate = () => {
      // eslint-disable-next-line
      console.log(this.search);
    };
  }
};
