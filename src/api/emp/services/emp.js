'use strict';

/**
 * emp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emp.emp');
