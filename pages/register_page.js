const { I, loginPage } = inject();

module.exports = {

  fields: {
    first_name: {
      android: 'First name',
      ios: '~First name'
    },
    last_name: {
      android: 'Last name',
      ios: '~Last name'
    },
    birth_date: {
      android: 'Birth date',
      ios: '~Birth date'
    },
    email: {
      android: 'Email',
      ios: '~Email',
    },
    password: {
      android: 'Password',
      ios: '~Password',
    },
    confirm_password: {
      android: 'Confirm Password',
      ios: '~Confirm Password'
    }
  },

  checkbox: {
    terms_and_policies: {
      android: '//android.widget.CheckBox',
      ios: ({ xpath: '//XCUIElementTypeApplication[@name="Bemis"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeSwitch' })
    }
  },

  buttons: {
    register: {
      android: ({ xpath: '//android.widget.Button[@content-desc="CREATE ACCOUNT"]' }),
      ios: ({ xpath: '//XCUIElementTypeButton[@name="CREATE ACCOUNT"]' })
    }
  },

  doRegister(first_name, last_name, birth_date, email, password, confirm_password) {
    I.acceptPopup()
    I.waitForElement(loginPage.buttons.register_here, 60)
    I.tap(loginPage.buttons.register_here)
    I.waitForElement(this.fields.first_name, 60)
    I.tap(this.fields.first_name)
    I.fillField(this.fields.first_name, first_name)
    I.tap(this.fields.last_name)
    I.fillField(this.fields.last_name, last_name)
    I.waitForElement(this.fields.birth_date, 60)
    I.tap(this.fields.birth_date)
    I.fillField(this.fields.birth_date, birth_date)
    I.tap(this.fields.email)
    I.fillField(this.fields.email, email)
    I.tap(this.fields.password)
    I.fillField(this.fields.password, password)
    I.runOnAndroid(() => {
      I.hideDeviceKeyboard('tapOutside')
    })
    I.tap(this.fields.confirm_password)
    I.fillField(this.fields.confirm_password, confirm_password)
    I.runOnAndroid(() => {
      I.hideDeviceKeyboard('tapOutside')
    })
    I.runOnIOS(() => {
      I.hideDeviceKeyboard('pressKey', 'Done')
    })
    I.tap(this.checkbox.terms_and_policies)
    I.tap(this.buttons.register)
    I.waitForElement(loginPage.buttons.enter, 10) //ACCOUNT CREATED
  }
}