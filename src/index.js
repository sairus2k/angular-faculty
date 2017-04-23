import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {hello} from './app/hello';
import {city} from './app/components/city';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, [uiRouter])
  .config(routesConfig)
  .component('app', hello)
  .component('city', city);
