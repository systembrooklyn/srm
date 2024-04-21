'use strict';

/**
 * basic-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-test.basic-test');
