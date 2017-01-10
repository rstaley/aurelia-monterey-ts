import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.map([
      { route: '',          moduleId: 'welcome', title:'Welcome'},
      { route: 'account',   moduleId: 'account', name:'account'},
      { route: 'agent',     moduleId: 'agent', name:'agent'},
    ]);

    this.router = router;
  }
}

  
