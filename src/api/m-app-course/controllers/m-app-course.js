'use strict';

/**
 * m-app-course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::m-app-course.m-app-course', ({ strapi }) => ({
    async find(ctx) {
        const response = await strapi.service('api::m-app-course.m-app-course').find();
        return ctx.send(response);
      },
}));
