import InputPage from '../pageObjects/input-page-po';

describe('Input Test', () => {
    beforeEach(() => {
        InputPage.visit();
    });

    it('Ingresar un número válido', () => {
        const inputValue = 11;
        InputPage.enterValue(inputValue);
        InputPage.getEnteredValue().should('eq', inputValue.toString());
    });
});