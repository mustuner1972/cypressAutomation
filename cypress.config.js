const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zciet1',
  

  env:{
  url: "https://rahulshettyacademy.com"
},
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  

    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
  
});
