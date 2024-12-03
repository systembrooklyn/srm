'use strict';

/**
 * schedule-m-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-m-app.schedule-m-app');
