Feature('login');

const { I, loginPage, registerPage } = inject()
const generate_email = require('../utils/email')

const email = generate_email.getEmail()
const email2 = email.replace(/(^"|"$)/g, '');

console.log(email2);

Scenario('Register successfully', () => {
    registerPage.doRegister('Test', 'QA', '02181990', email2, 'Ckl@123456', 'Ckl@123456')
});

Scenario('Login successfully', () => {
    loginPage.doLogin(email2, 'Ckl@123456')
});
