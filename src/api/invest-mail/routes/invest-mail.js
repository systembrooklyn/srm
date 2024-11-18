'use strict';

/**
 * invest-mail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::invest-mail.invest-mail');

module.exports = {
    
    routes: [
      {
        "method": "GET",
        "path": "/invest-mails",
        "handler": "invest-mail.find",
        "config": {
          "policies": []
        }
      },
      {
        "method": "POST",
        "path": "/invest-mails",
        "handler": "invest-mail.create",
        "config": {
          "policies": []
        }
      }
    ],
}
