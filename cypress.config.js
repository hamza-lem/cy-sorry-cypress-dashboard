const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig ({
  video: true,
  retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress-report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Register the Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      cloudPlugin(on, config);
      return config;
    },
  },
});
