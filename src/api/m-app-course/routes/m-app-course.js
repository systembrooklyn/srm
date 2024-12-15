'use strict';

/**
 * m-app-course router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::m-app-course.m-app-course');

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/m-app-courses",
      handler: "m-app-course.find",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/m-app-courses",
      handler: "m-app-course.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/m-app-courses/{id}",
      handler: "m-app-course.update",
      config: {
          policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/m-app-courses/{id}",
      handler: "m-app-course.delete",
      config: {
          policies: [],
      },
    },
  ],
};

