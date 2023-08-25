class InputPage {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/inputs');
    }

    getInput() {
        return cy.get('input[type="number"]');
    }

    enterValue(value) {
        this.getInput().clear().type(value);
    }

    getEnteredValue() {
        return this.getInput().invoke('val');
    }
}

export default new InputPage();
