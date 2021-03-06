import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import './models/custom-inflector-rules';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    childApp: {
      dependencies: {
        externalRoutes: {
        },
        services: [ 'store' ]
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
