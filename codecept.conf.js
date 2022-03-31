exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'iOS',
      app: '/Users/franciellypedroso/Desktop/ipa/Runner.app',
      desiredCapabilities: {
        deviceName: 'iPhone 13',
        platformVersion: '15.2',
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    registerPage: './pages/register_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.js',
  name: 'codeceptjs-appium-automation'
}