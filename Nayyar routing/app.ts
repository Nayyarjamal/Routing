/// <reference path="typings/tsd.d.ts" />


import {Component, View,CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';


@Component({
  selector: 'app',
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' }
])
@View({
  templateUrl: './app.html',
  directives: [CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS]);
