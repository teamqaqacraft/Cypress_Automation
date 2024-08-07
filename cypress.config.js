const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video : true,
  screenshot : true,
  reporterOptions: {
    charts: true,
    reportDir: 'cypress/reports/html',
    reportPageTitle: 'custom-title',
    reportFilename: "report", 
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: false,
    html : true
  },

  e2e: {
  
    defaultCommandTimeout : 6000,
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/",
   
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      
     require('cypress-mochawesome-reporter/plugin')(on);

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      
    },
    supportFile: 'cypress/support/e2e.js',
  },
});
