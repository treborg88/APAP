import HoversPage from '../pageObjects/hover-page-po';
import "cypress-real-events/support";

describe('Hover Test', () => {
  beforeEach(() => {
    HoversPage.visit();
  });

  it('Verificar que la información del usuario se muestre al pasar el mouse sobre su imagen', () => {
    HoversPage.hoverOverUser();
    HoversPage.getUserName().should('be.visible');
  });
});