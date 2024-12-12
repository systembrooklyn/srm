"use strict";

/**
 * m-app-user router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::m-app-user.m-app-user");

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/m-app-users",
      handler: "m-app-user.find",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/m-app-users",
      handler: "m-app-user.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/m-app-users/:id",
      handler: "m-app-user.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/m-app-users/:id",
      handler: "m-app-user.delete",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/m-app-users/:id",
      handler: "m-app-user.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/m-app-users/check-credentials",
      handler: "m-app-user.checkCredentials",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/m-app-users/forget-passwords",
      handler: "m-app-user.forgetPassword",
      config: {
        policies: [],
      },
    },
  ],
};
