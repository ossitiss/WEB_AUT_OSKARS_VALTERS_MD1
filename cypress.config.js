const { defineConfig } = require("cypress");

module.exports = {
  viewportWidth: 1440,
  viewportHeight: 1400,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:3000",
  },
};
