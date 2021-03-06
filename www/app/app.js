// External includes
import 'jquery';
import 'angular';
import 'ui-router';
import 'angular-ui-router-title';
import 'angular-component';

// Semantic
import '../semantic/dist/semantic.min.js';
import '../semantic/dist/semantic.min.css';

// Modules
import modCommon from './common/common.module';

// Components
import appComponent from './app.component';

// Styles
import './app.scss';

let mod = angular.module('app', [
  'app.common',
  'ui.router',
  'ui.router.title'
]);

mod.run(($rootScope)=> {
  'ngInject';

  $rootScope.title = 'Stuart Forster - Fozzy Media | Full Stack Developer';
});

// app is not prefixed here - but you should prefix yours (don't forget to change the main template index.jade)
mod.component('app', appComponent);

export default mod = mod.name;