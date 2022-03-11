Feature('login');

const { I, loginPage, registerPage } = inject()

Scenario('Register successfully', () => {
    registerPage.doRegister('Test', 'QA', '02181990', 'test_qa_3@ckl.io', 'Ckl@123456', 'Ckl@123456')
});

Scenario('Login successfully', () => {
    loginPage.doLogin('test_qa_3@ckl.io', 'Ckl@123456')
});
