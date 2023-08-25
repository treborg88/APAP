class DropdownPage {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
    }
  
    getDropdown() {
      return cy.get('#dropdown');
    }
  
    selectOptionByIndex(index) {
      this.getDropdown().select(index);
    }
    
    getSelectedOption() {
      return this.getDropdown().find('option:selected');
    }
  }
  
  export default new DropdownPage();