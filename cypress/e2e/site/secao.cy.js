describe("Seção de redes sociais", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  it("CT-023 - Redirecionar para o LinkedIn", () => {
    cy.validarRedirecionamento("#iowxol", "linkedin", "rubeus");
  });

  it("CT-024 - Redirecionar para o Facebook", () => {
    cy.validarRedirecionamento("#iv4sbv", "facebook", "CanalRubeus");
  });

  it("CT-025 - Redirecionar para o Twitter", () => {
    cy.validarRedirecionamento("#in1aw2", "x.com", "CanalRubeus");
  });

  it.only("CT-026 - Redirecionar para o Youtube", () => {
    cy.validarRedirecionamento("#ibg9i8", "youtube", "@Rubeus");
  });

  it("CT-027 - Redirecionar para o Instagram", () => {
    cy.validarRedirecionamento("#iyoebg", "instagram", "canalrubeus/");
  });
});
