import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
const allureWriter =require("@shelex/cypress-allure-plugin/writer");

//const options = browserify.defaultOptions;

export default defineConfig({
 env:{
 allure:true,
 allureAddVideoOnPass:true,
 allureClearSkippedTests:false,
 filterSpecs:true,
 omitFiltered:true
  },
  video:false,
  e2e: {
    async setupNodeEvents(  on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        browserify(config, {
          typescript: require.resolve("typescript"),
        })
      )
      allureWriter(on, config); 
      return config;
    },
    specPattern:['cypress/e2e/**/*.feature']
  },
});
