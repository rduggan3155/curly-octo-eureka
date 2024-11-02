const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.jobs/en/",
    supportFile: "cypress/e2e/2_support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
