'use strict'

import services from './services';
import routes from './routes';
import controllers from './controllers';

import pkgJson from '../package.json' ;

export default {
  controllers,
  routes,
  services,

  register({ strapi }) {
    strapi.customFields.register({
      name: 'oembed',
      plugin: pkgJson.strapi.name,
      type: 'text'
    })
  }
};
