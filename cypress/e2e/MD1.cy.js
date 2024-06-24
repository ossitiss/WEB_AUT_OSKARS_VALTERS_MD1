import { SelectablePage } from "../pageObjects/selectable.page";

describe("MD1", () => {
  context("Grid", () => {
    beforeEach(() => {
      cy.visit();
    });

    it("Grid", () => {

      //grid poga
      SelectablePage.selectGrid.click();

      //skaitli - 2,4,6,8
      SelectablePage.selectSquare("Two").click();
      SelectablePage.selectSquare("Four").click();
      SelectablePage.selectSquare("Six").click();
      SelectablePage.selectSquare("Eight").click();

      //parbauda vai poga ir aktiva(blue)
      SelectablePage.selectSquare("Two").should('have.class', 'active');
      SelectablePage.selectSquare("Four").should('have.class', 'active');
      SelectablePage.selectSquare("Six").should('have.class', 'active');
      SelectablePage.selectSquare("Eight").should('have.class', 'active');

      //parbauda vai neaktiva(grey)
      SelectablePage.selectSquare("One").should('not.have.class', 'active');
      SelectablePage.selectSquare("Three").should('not.have.class', 'active');
      SelectablePage.selectSquare("Five").should('not.have.class', 'active');
      SelectablePage.selectSquare("Seven").should('not.have.class', 'active');
      SelectablePage.selectSquare("Nine").should('not.have.class', 'active');
    });
  })
})