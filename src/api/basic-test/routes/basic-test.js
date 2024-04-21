'use strict';

/**
 * basic-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::basic-test.basic-test');
