const { I } = inject();

module.exports = {

  fields: {
    first_name: 'First name',
    last_name: 'Last name',
  },

  buttons: {
    register: '~Register Here'
  },

  doRegister(first_name){
    I.waitForElement(this.buttons.register, 60)
    I.tap(this.buttons.register)
    I.waitForElement(this.fields.first_name, 60)
    I.tap(this.fields.first_name)
    I.fillField(this.fields.first_name, first_name)
  }
}