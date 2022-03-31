const { I } = inject();

module.exports = {

  fields: {
    email: { android: ({xpath:'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[1]'}),
             ios: '~E-mail'
           },
    password: { android: ({xpath:'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[2]'}),
                ios: '~Password'
              }
  },

  buttons: {
    enter: { android: ({xpath: '//android.widget.Button[@content-desc="LOG IN"]'}),
             ios: '~LOG IN',
           },
    register_here: '~Register Here'
  },

  doLogin(email, password){
    I.waitForElement(this.fields.email, 60)
    I.tap(this.fields.email)
    I.fillField(this.fields.email, email)
    I.tap(this.fields.password)
    I.fillField(this.fields.password, password)
    I.runOnAndroid(() => {
      I.hideDeviceKeyboard('tapOutside')
    });
    I.tap(this.buttons.enter)
  }
}
