import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {api} from './app/services/api';
import {hello} from './app/hello';
import {city} from './app/components/city';
import routesConfig from './routes';
import sceConfig from './sce';

import './index.css';

export const app = 'app';

angular
  .module(app, [uiRouter])
  .config(routesConfig)
  .config(sceConfig)
  .factory('Api', api)
  .component('app', hello)
  .component('city', city);
