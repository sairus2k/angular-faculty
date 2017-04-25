import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {api} from './app/services/api';
import {city} from './app/components/city';
import {university} from './app/components/university';
import {faculty} from './app/components/faculty';
import {loading} from './app/components/loading';
import routesConfig from './routes';
import sceConfig from './sce';
import httpConfig from './http';

import './index.css';

export const app = 'app';

angular
  .module(app, [uiRouter])
  .config(routesConfig)
  .config(sceConfig)
  .config(httpConfig)
  .factory('Api', api)
  .component('city', city)
  .component('university', university)
  .component('faculty', faculty)
  .component('loading', loading);
