import "cypress-real-events/support";
class HoversPage {
  visit() {
    cy.visit('https://the-internet.herokuapp.com/hovers');
  }

  getUserAvatar() {
    return cy.get('.figure').eq(1);
  }

  getUserName() {
    return cy.contains('name: user2');
  }

  hoverOverUser() {
    this.getUserAvatar().realHover('mouse');
  }
}

export default new HoversPage();