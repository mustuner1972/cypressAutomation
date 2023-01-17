const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zciet1',
  

  env:{
  url: "https://rahulshettyacademy.com"
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
