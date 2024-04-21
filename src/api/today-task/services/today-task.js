'use strict';

/**
 * today-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::today-task.today-task');
