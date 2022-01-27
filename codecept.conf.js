exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: '/Users/gianlucademello/Desktop/Bemis_image/Bemis.apk',
      desiredCapabilities: {
        deviceName: 'Bemis_android',
        platformVersion: '12',
        appPackage: 'com.bemis',
        appActivity: '.MainActivity'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'BemisAutomation',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}