module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage-instabul-reporter'),
      require('karma-jasmine-html-reporter')
    ],
    client: {
      clearContext: false
    },
    coverageInstabulReporter:{
      dir: require('path').join(__dirname, '../coverage/angular-test'),
      reports: ['html','lconvoly','text-summary'],
      fixWebpackSourcePaths:true
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,
  });
};
