"use strict";

/**
 * m-app-user controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::m-app-user.m-app-user",
  ({ strapi }) => ({
    async checkCredentials(ctx) {
      // التحقق من نوع الطلب
      if (ctx.request.method !== "POST") {
        return ctx.badRequest("This endpoint only accepts POST requests.");
      }
      const { email, password } = ctx.request.body;

      if (!email || !password) {
        return ctx.badRequest("Email and password are required.");
      }

      const user = await strapi.db.query("api::m-app-user.m-app-user").findOne({
        where: { email: email },
        select: ["email", "password", "name", "stID", "phone", "ppURL"],
      });

      if (!user) {
        return ctx.send({
          success: false,
          message: "البريد الإلكتروني غير موجود.",
        });
      }

      // مقارنة كلمة المرور مباشرة (غير موصى به)
      if (password !== user.password) {
        return ctx.send({ success: false, message: "كلمة المرور غير صحيحة." });
      }

      delete user.password;

      return ctx.send({ success: true, message: "تسجيل الدخول ناجح.", user });
    },

    async create(ctx) {
      const { name, stID, email, phone, password, ppURL } = ctx.request.body;
      const response = await strapi.service("api::m-app-user.m-app-user").create({
        data: {
          name,
          stID,
          email,
          phone,
          password,
          ppURL,
        },
      });
      return ctx.send(response);
    },

    async find(ctx) {
      const response = await strapi.service("api::m-app-user.m-app-user").find();
      return ctx.send(response);
    },

    async findOne(ctx) {
      const { id } = ctx.params;
      const response = await strapi.service("api::m-app-user.m-app-user").findOne({
        id,
      });
      return ctx.send(response);
    },

    async update(ctx) {
      const { id } = ctx.params;
      const { name, stID, email, phone, password, ppURL } = ctx.request.body;
      const response = await strapi.service("api::m-app-user.m-app-user").update({
        id,
        data: {
          name,
          stID,
          email,
          phone,
          password,
          ppURL,
        },
      });
      return ctx.send(response);
    },

    async delete(ctx) {
      const { id } = ctx.params;
      const response = await strapi.service("api::m-app-user.m-app-user").delete({
        id,
      });
      return ctx.send(response);
    },
  })
);
