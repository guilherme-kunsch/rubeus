describe("Agenda de Eventos", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  it("CT-015 - Validar redirecionamento dos botões Inscreva-se agora", () => {
    cy.get("#i6b9dk")
      .should(
        "have.attr",
        "href",
        "https://cursos.rubeus.com.br/analista-rubeus/",
      )
      .click();

    cy.get("#iwmzne")
      .should(
        "have.attr",
        "href",
        "https://cursos.rubeus.com.br/analista-rubeus/",
      )
      .click();
    cy.get("#izq1hh")
      .should(
        "have.attr",
        "href",
        "https://cursos.rubeus.com.br/analista-rubeus/",
      )
      .click();
    cy.get("#itzwfq")
      .should(
        "have.attr",
        "href",
        "https://cursos.rubeus.com.br/analista-rubeus/",
      )
      .click();
  });
});
