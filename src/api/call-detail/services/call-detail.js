'use strict';

/**
 * call-detail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-detail.call-detail');
