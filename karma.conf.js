// Karma configuration

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  /**
   *  !! Put all libs in RequireJS 'paths' config here (included: false).
   *  All these files are files that are needed for the tests to run,
   *  but Karma is being told explicitly to avoid loading them, as they
   *  will be loaded by RequireJS when the main module is loaded.
   */

  /**
   *  All the sources, tests  // !! all src and test modules (included: false)
   */
//  {pattern: 'app/vendors/**/*.js',  included: false},
  {pattern: 'app/scripts/*.js',           included: false},
  {pattern: 'app/scripts/**/*.js',        included: false},
  {pattern: 'test/spec/services/*.js',    included: false},

  /**
   * !! test main require module last
   */
  'test/spec/main.js'
];

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress || growl
reporters = 'progress';

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
