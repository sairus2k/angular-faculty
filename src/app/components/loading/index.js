import './loading.css';

export const loading = {
  template: require('./loading.html'),
  controller($rootScope) {
    'ngInject';

    const loadingCounts = {
      request: 0,
      response: 0
    };

    this.show = false;

    const requestWatcher = $rootScope.$on('request', () => {
      loadingCounts.request++;
      if (loadingCounts.request > loadingCounts.response) {
        this.show = true;
      }
    });

    const responseWatcher = $rootScope.$on('response', () => {
      loadingCounts.response++;
      if (loadingCounts.request === loadingCounts.response) {
        this.show = false;
      }
    });

    this.$onDestroy = () => {
      requestWatcher();
      responseWatcher();
    };
  }
};
