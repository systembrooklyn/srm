'use strict';

/**
 * invest-mail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::invest-mail.invest-mail');

module.exports = {
    
    routes: [
      {
        method: 'POST',
        path: '/invest-mail',
        handler: 'invest-mail.create',
        config: {
          auth: false,
        },
      },
    ],
}
