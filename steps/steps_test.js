Feature('login');

const { I, loginPage, registerPage } = inject()
const generate_email = require('../utils/email')

const email = generate_email.getEmail()
const email_generate = email.replace(/(^"|"$)/g, '');

console.log(email_generate);
// Before(() => {
//     I.runOnIOS(() => {
//         I.acceptPopup()
//     })
// })

Scenario('Register successfully', () => {
    registerPage.doRegister('Test', 'QA', '02/18/1990', email_generate, 'Ckl@123456', 'Ckl@123456')
});

Scenario('Login successfully', () => {
    loginPage.doLogin(email_generate, 'Ckl@123456')
});
