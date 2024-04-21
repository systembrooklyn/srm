'use strict';

/**
 * basic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::basic.basic');
