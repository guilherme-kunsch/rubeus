describe("Header - Menu Principal", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  it("CT-010 - Redirecionamento para seção Nossos Diferenciais da página", () => {
    cy.get("#i7qsxy a")
      .should("have.attr", "href", "https://rubeus.com.br/sobre-a-rubeus/")
      .click();
  });

  it("CT-011 - Redirecionamento para seção Eventos da página", () => {
    cy.get("#ihimt7 p a")
      .should(
        "have.attr",
        "href",
        "https://cursos.rubeus.com.br/analista-rubeus/",
      )
      .click();
  });

  it("CT-012 - Deve redicionar para seção de depoimentos da página", () => {
    cy.get("#i5v5f6 p a")
      .should("have.attr", "href", "https://rubeus.com.br/cases-de-sucesso/")
      .click();
  });

  it.only("CT-013 - Redirecionamento para um consultor", () => {
    cy.validarRedirecionamento("#iopirr", "whatsapp");
  });
});
