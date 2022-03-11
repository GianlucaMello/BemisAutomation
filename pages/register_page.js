const { I, loginPage } = inject();

module.exports = {

  fields: {
    first_name: 'First name',
    last_name: 'Last name',
    birth_date: 'Birth date',
    email: 'Email',
    password: 'Password',
    confirm_password: 'Confirm Password',
  },
  
  checkbox: {
    terms_and_policies: '//android.widget.CheckBox'
  },
  
  buttons: {
    register: ({xpath:'//android.widget.Button[@content-desc="CREATE ACCOUNT"]'})
  },
  
  doRegister(first_name, last_name, birth_date, email, password, confirm_password){
    I.waitForElement(loginPage.buttons.register_here, 60)
    I.tap(loginPage.buttons.register_here)
    I.waitForElement(this.fields.first_name, 60)
    I.tap(this.fields.first_name)
    I.fillField(this.fields.first_name, first_name)
    I.tap(this.fields.last_name)
    I.fillField(this.fields.last_name, last_name)
    I.tap(this.fields.birth_date)
    I.fillField(this.fields.birth_date, birth_date)
    I.tap(this.fields.email)
    I.fillField(this.fields.email, email)
    I.tap(this.fields.password)
    I.fillField(this.fields.password, password)
    I.hideDeviceKeyboard('tapOutside')
    I.tap(this.fields.confirm_password)
    I.fillField(this.fields.confirm_password, confirm_password)
    I.hideDeviceKeyboard('tapOutside')
    I.tap(this.checkbox.terms_and_policies)
    I.tap(this.buttons.register)
    I.waitForElement(loginPage.buttons.enter, 5) //ACCOUNT CREATED
  }
}