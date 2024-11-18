'use strict';

/**
 * invest-mail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::invest-mail.invest-mail', ({ strapi }) => ({
  // تخصيص الدالة create
  async create(ctx) {
    try {
      // الحصول على البيانات من الـ body
      const { email, projectName, score } = ctx.request.body;

      // تحقق من وجود البيانات اللازمة
      if (!email || !projectName || !score) {
        return ctx.throw(400, 'Missing required fields');
      }

      // تخزين البيانات في الـ collection
      const response = await strapi.service('api::invest-mail.invest-mail').create({
        data: {
          email,
          projectName,
          score
        }
      });

      // إرجاع الاستجابة
      return ctx.send({
        message: 'Data created successfully!',
        data: response
      });

    } catch (error) {
      console.error(error);
      ctx.throw(500, 'Internal Server Error');
    }
  }
}));
