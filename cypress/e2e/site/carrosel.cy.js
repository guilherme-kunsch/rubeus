describe("Carrosel", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("CT-014 - Validar navegação ao clicar nos indicadores", () => {
    cy.get("#iq16fg .dot").eq(0).should("have.class", "dot").click();
    cy.get("#iq16fg .dot").eq(1).should("have.class", "dot").click();
    cy.get("#iq16fg .dot").eq(2).should("have.class", "dot").click();
  });
});
