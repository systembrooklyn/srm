'use strict';

/**
 * basic-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::basic-test.basic-test');
