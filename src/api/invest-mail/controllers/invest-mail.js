'use strict';

/**
 * invest-mail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::invest-mail.invest-mail', ({ strapi }) => ({
    async create(ctx) {
      try {
        const { email, projectName, score } = ctx.request.body;
  
        if (!email || !projectName || !score) {
          return ctx.throw(400, 'Missing required fields');
        }
  
        const response = await strapi.service('api::invest-mail.invest-mail').create({
          data: {
            email,
            projectName,
            score
          }
        });
  
        return ctx.send({ message: 'Data created successfully!', data: response });
      } catch (error) {
        console.error('Internal Server Error:', error);
        ctx.throw(500, 'Internal Server Error');
      }
    }
  }));
  
