'use strict';

/**
 * task-report service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-report.task-report');
