import LoginPage from '../pageObjects/login-page-po';

describe('Login test', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Iniciar sesión con usuario y contraseña correctos', () => {
    LoginPage.fillUsername('tomsmith');
    LoginPage.fillPassword('SuperSecretPassword!');
    LoginPage.clickLoginButton();
    LoginPage.getSuccessMessage().should('be.visible');
  });
});