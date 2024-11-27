'use strict';

/**
 * payment-mobile-app controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::payment-mobile-app.payment-mobile-app',
  ({ strapi }) => ({
    async find(ctx) {
      const response = await strapi.service(
        'api::payment-mobile-app.payment-mobile-app'
      ).find();
      return ctx.send(response);
    },
    
    async findOne(ctx) {
      const { id } = ctx.params;
      const response = await strapi.service(
        'api::payment-mobile-app.payment-mobile-app'
      ).findOne({ id });
      return ctx.send(response);
    },

    async create(ctx) {
      const response = await strapi.service(
        'api::payment-mobile-app.payment-mobile-app'
      ).create(ctx.request.body);
      return ctx.send(response);
    },
    
    async update(ctx) {
      const { id } = ctx.params;
      const response = await strapi.service(
        'api::payment-mobile-app.payment-mobile-app'
      ).update({ id }, ctx.request.body);
      return ctx.send(response);
    },
  })
);