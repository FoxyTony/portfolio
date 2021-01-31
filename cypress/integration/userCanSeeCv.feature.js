
describe("User can see the cv picture", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#cv-tab").click();
    });



    it("displays cv header", () => {
        cy.get("#cv-header").should("contain", "Curriculum");
    });


    it("displays component name in url", () => {
        cy.url().should("contain", "cv");
    });
});
