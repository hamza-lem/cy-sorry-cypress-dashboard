// currents.config.js
module.exports = {
  // projectId should match the projectId value used in Sorry-Cypress.
  projectId: 'cy-sorry-cypress-dashboard',
  // Record key, can be any value.
  recordKey: 'cy-key',
  // Director service URL
  cloudServiceUrl:
    process.env.SORRY_CYPRESS_DIRECTOR_URL || 'http://localhost:1234',
};
