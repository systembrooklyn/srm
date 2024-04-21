'use strict';

/**
 * basic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic.basic');
