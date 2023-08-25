import DropdownPage from '../pageObjects/dropdown-page-po';

describe('Dropdown Test', () => {
  beforeEach(() => {
    DropdownPage.visit();
  });

  it('Seleccionar una opcion del menu', () => {
    const optionIndex = 2;
    DropdownPage.selectOptionByIndex(optionIndex);
    DropdownPage.getSelectedOption().should('have.text', 'Option 2');
  });
});