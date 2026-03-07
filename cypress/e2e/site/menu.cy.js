describe("Header - Menu Principal", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  it("CT-010 - Redirecionamento para seção Nossos Diferenciais da página", () => {
    cy.validarRedirecionamento("#i7qsxy a", "rubeus.com.br", "sobre-a-rubeus/");
  });

  it("CT-011 - Redirecionamento para seção Eventos da página", () => {
    cy.validarRedirecionamento(
      "#ihimt7 p a",
      "cursos.rubeus.com.br",
      "analista-rubeus",
    );
  });

  it("CT-012 - Deve redicionar para seção de depoimentos da página", () => {
    cy.validarRedirecionamento(
      "#i5v5f6 p a",
      "rubeus.com.br",
      "cases-de-sucesso",
    );
  });

  it.only("CT-013 - Redirecionamento para um consultor", () => {
    cy.validarRedirecionamento("#iopirr", "whatsapp");
  });
});
