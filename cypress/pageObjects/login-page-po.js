class LoginPage {

    visit() {
        cy.visit('https://the-internet.herokuapp.com/login');
    }

    fillUsername(username) {
        cy.get('#username').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    clickLoginButton() {
        cy.get('button[type="submit"]').click();
    }

    getSuccessMessage() {
        return cy.contains('You logged into a secure area!');
    }

}

export default new LoginPage();