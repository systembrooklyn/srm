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
      const { stId, email, password } = ctx.request.body;
    
      

      if (!password) {
        return ctx.badRequest("Password is required.");
      }

      
      
    
      // البحث عن المستخدم بناءً على البريد الإلكتروني
      if (email) {
        if (!email) {
          return ctx.badRequest("Email is required.");
        }
        const user = await strapi.db.query("api::m-app-user.m-app-user").findOne({
          where: { email: email },
          select: ["email", "password", "name", "stID", "phone", "ppURL"],
        });
        // إذا لم يتم العثور على المستخدم
      if (!user) {
        return ctx.send({
          success: false,
          message: "البريد الإلكتروني غير موجود.",
        });
      }
      // مقارنة كلمة المرور
      if (password !== user.password) {
        return ctx.send({ success: false, message: "كلمة المرور غير صحيحة." });
      }
    
      // استخراج stID من بيانات المستخدم
      const { stID } = user;
    
      // البحث عن المدفوعات بناءً على stID
      const payments = await strapi.db.query("api::payment-mobile-app.payment-mobile-app").findMany({
        where: { stID: stID },
        select: ["stID", "Status", "TotalPayment", "due_date", "paid_date", "amount", "PaidAmount"],
      });
    
      // حذف كلمة المرور قبل إرجاع البيانات
      delete user.password;
    
      // إرجاع البيانات مع المدفوعات
      return ctx.send({
        success: true,
        message: "تسجيل الدخول ناجح.",
        user,
        payments,
      });

      } else if (stId) {

        if (!stId) {
          return ctx.badRequest("student ID is required.");
        }


        // البحث عن المستخدم بناءً على stID
        const user = await strapi.db.query("api::m-app-user.m-app-user").findOne({
          where: { stID: stId },
          select: ["email", "password", "name", "stID", "phone", "ppURL"],
        });
        // إذا لم يتم العثور على المستخدم
        if (!user) {
          return ctx.send({
            success: false,
            message: "البريد الإلكتروني غير موجود.",
          });
        }
        // استخراج stID من بيانات المستخدم
        const { stID } = user;
    
        // البحث عن المدفوعات بناءً على stID
        const payments = await strapi.db.query("api::payment-mobile-app.payment-mobile-app").findMany({
          where: { stID: stID },
          select: ["stID", "Status", "TotalPayment", "due_date", "paid_date", "amount", "PaidAmount"],
        });
    
        // حذف كلمة المرور قبل إرجاع البيانات
        delete user.password;
    
        // إرجاع البيانات مع المدفوعات
        return ctx.send({
          success: true,
          message: "تسجيل الدخول ناجح.",
          user,
          payments,
        });
      }
    
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
