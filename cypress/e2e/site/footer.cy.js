describe("Footer - Redes Sociais", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });

  it("CT-028 - Redirecionar para o Facebook", () => {
    cy.validarRedirecionamento("#ivmnr9", "facebook", "CanalRubeus");
  });

  it("CT-029 - Redirecionar para o LinkedIn", () => {
    cy.validarRedirecionamento("#ixax8x", "linkedin", "rubeus");
  });

  it("CT-030 - Redirecionar para o YouTube", () => {
    cy.validarRedirecionamento("#ic6rdi", "youtube", "@Rubeus");
  });

  it("CT-031 - Redirecionar para o Instagram", () => {
    cy.validarRedirecionamento("#ilnvjq", "instagram", "canalrubeus/");
  });

  it.only("CT-032 - Acesso ao link Institucional", () => {
    cy.validarRedirecionamento("#ij9km7", "rubeus.com.br", "sobre-a-rubeus/");
  });
});
