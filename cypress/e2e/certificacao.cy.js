import loc from "../support/locators";

describe("Testando a aplicação de certificação", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });
  it("CT-001 - Primeiro Botão Saiba Mais", () => {
    cy.validarRedirecionamento("#ivw5ng", "rubeus.com.br/");
  });

  it("CT-002 - Enviando o formulário com dados válidos", () => {
    cy.shouldHaveActionsForm();
    cy.get(loc.FORMULARIO.NOME)
      .type("Teste testando")
      .should("have.value", "Teste testando");
    cy.get(loc.FORMULARIO.REGIAO).click().should("contain", "Brazil");
    cy.get(loc.FORMULARIO.TELEFONE)
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(loc.FORMULARIO.EMAIL)
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");
    cy.get(loc.FORMULARIO.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it("CT-003 - Enviando formulário sem o nome", () => {
    cy.shouldHaveActionsForm();
    cy.get(loc.FORMULARIO.REGIAO).click().should("contain", "Brazil");
    cy.get(loc.FORMULARIO.TELEFONE)
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(loc.FORMULARIO.EMAIL)
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(loc.FORMULARIO.BOTAO_AVANCAR).click();
  });

  it("CT-004 - Enviando formulário sem o telefone", () => {
    cy.shouldHaveActionsForm();
    cy.get(loc.FORMULARIO.NOME)
      .type("Teste testando")
      .should("have.value", "Teste testando");

    cy.get(loc.FORMULARIO.EMAIL)
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(loc.FORMULARIO.BOTAO_AVANCAR).click();
  });

  it("CT-005 - Enviando o formulário com o email", () => {
    cy.shouldHaveActionsForm();
    cy.get(loc.FORMULARIO.NOME)
      .type("Teste testando")
      .should("have.value", "Teste testando");
    cy.get(loc.FORMULARIO.REGIAO).click().should("contain", "Brazil");
    cy.get(loc.FORMULARIO.TELEFONE)
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(loc.FORMULARIO.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it("CT-006 - Validando o segundo botão de Saiba Mais", () => {
    cy.validarRedirecionamento("#ixy3u1", "rubeus.com.br");
  });

  it("CT-007 - Validando o segundo botão de Saiba Mais", () => {
    cy.validarRedirecionamento("#ixy3u1", "rubeus.com.br");
  });

  it("CT-008 - Validando botão de Facebook", () => {
    cy.validarRedirecionamento("#io0o4o", "facebook", "CanalRubeus");
  });

  it("CT-009 - Validando botão do Instagram", () => {
    cy.validarRedirecionamento("#il7i3x", "instagram", "canalrubeus");
  });

  it("CT-010 - Validando botão do Linkedin", () => {
    cy.validarRedirecionamento("#i2m2tn", "linkedin", "rubeus");
  });

  it("CT-011 - Validando botão do Youtube", () => {
    cy.validarRedirecionamento("#ifpwp7", "youtube", "@Rubeus");
  });
});
