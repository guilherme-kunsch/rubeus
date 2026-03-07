describe("Header - Canais de atendimento", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("CT-001 - Deve redirecionar ao clicar em Atendimento", () => {
    cy.validarRedirecionamento("#ipkda", "whatsapp");
  });

  it("CT-002 - Deve redirecionar ao clicar no Whatsapp", () => {
    cy.validarRedirecionamento("#iks3g", "whatsapp");
  });

  it("CT-003 - Deve redirecionar para o Linkedin", () => {
    cy.validarRedirecionamento("#iuowq", "linkedin", "rubeus");
  });

  it("CT-004 - Deve redirecionar para o Facebook", () => {
    cy.validarRedirecionamento("#i5aau", "facebook.com", "CanalRubeus");
  });

  it("CT-005 - Deve redirecionar para o Twitter", () => {
    cy.validarRedirecionamento("#icstg", "x.com", "CanalRubeus");
  });

  it("CT-006 - Deve redirecionar para o Youtube", () => {
    cy.validarRedirecionamento("#in0ql", "youtube.com", "@Rubeus");
  });

  it("CT-007 - Deve redirecionar para o Instagram", () => {
    cy.validarRedirecionamento("#i5rqa", "instagram", "canalrubeus/");
  });

  it("CT-008 - Deve redirecionar para o site institucional da Rubeus", () => {
    cy.get("#ilmc2")
      .should("have.attr", "href")
      .and("include", "https://rubeus.com.br/");
  });

  it("CT-008 - Deve redirecionar para base de conhecimento", () => {
    cy.get("#ier16")
      .should("have.attr", "href")
      .and("include", "https://crmrubeus.zendesk.com/hc/pt-br");
  });
});
