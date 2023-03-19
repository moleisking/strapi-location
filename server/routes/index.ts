export default [
  {
    method: 'GET',
    path: '/psoition',
    handler: 'positionController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/star',
    handler: 'starController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/star',
    handler: 'starController.index',
    config: {
      policies: [],
    },
  },
];
