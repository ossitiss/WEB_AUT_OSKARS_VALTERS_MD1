export class SelectablePage {
    static visit() {
        return cy.visit("https://demoqa.com/selectable");
    }
    static get selectGrid() {
        return cy.get("[id='demo-tab-grid']");
    }
    static selectSquare(number) {
        return cy.contains(".list-group-item.list-group-item-action", number);
    }
}