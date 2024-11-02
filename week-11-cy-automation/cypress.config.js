const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.jobs/en/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
