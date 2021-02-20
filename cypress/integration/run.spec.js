describe("do it for CVS", () => {
  it("checks on MA", () => {
    cy.visit(
      "https://www.cvs.com/immunizations/covid-19-vaccine?icid=cvs-home-hero1-banner-1-link2-coronavirus-vaccine"
    );
    // TODO: THIS CAN BE CUSTOMIZED BY STATE
    cy.get("[data-modal=vaccineinfo-MA]").click({ force: true });
    cy.get(
      '[data-url="/immunizations/covid-19-vaccine.vaccine-status.ma.json?vaccineinfo"]'
    );
    // TODO: specify city, list
    cy.get(".city").contains("braintree, MA").scrollIntoView();
    cy.get(".city")
      .contains("braintree, MA")
      .parent()
      .parent()
      .get(".status")
      .contains("Fully Booked");
  });
});
