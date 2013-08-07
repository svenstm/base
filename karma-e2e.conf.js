module.exports = function (karma)
{
  'use strict';

  karma.set({
    frameworks: ['jasmine', 'ng-scenario'],

    files: [
      'app/vendors/angular-scenario/angular-scenario.js',
      'test/e2e/*.js'
    ],

    basePath: '',

    exclude: [],

    reporters: ['progress'],

    port: 8080,

    runnerPort: 9100,

    colors: true,

    logLevel: karma.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    captureTimeout: 5000,

    singleRun: false,

    proxies: {
      '/': 'http://localhost:9000/'
    },

    urlRoot: '/_karma_/',

    plugins: [
      'karma-jasmine',
      'karma-ng-scenario',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ]
  });
};
