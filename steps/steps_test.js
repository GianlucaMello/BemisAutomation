Feature('login');

const { I, loginPage, registerPage } = inject()

Scenario('Register successfully', () => {
    registerPage.doRegister('Test')
});

Scenario('Login successfully', () => {
    loginPage.doLogin('gianluca.mello@ckl.io', 'Teste@123')
});
