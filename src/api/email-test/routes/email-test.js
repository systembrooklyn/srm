module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/email-test',
     handler: 'email-test.sendTestEmail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
