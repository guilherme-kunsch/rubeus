import loc from "../../support/locators";

describe("Enviando formulário", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  it("CT-016 - Enviar o formulário com informações válidas", () => {
    cy.shouldHaveActionsForm();

    cy.preencherFormulario({
      nome: "Guilherme",
      email: "guilherme@kunsch.com",
      telefone: "27997523768",
    });
    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it("CT-017 - Enviar o formulário sem o nome", () => {
    cy.shouldHaveActionsForm();
    cy.preencherFormulario({
      nome: "",
      email: "guilherme@kunsch.com",
      telefone: "27997523768",
    });

    cy.mensagemDeSucesso("É necessário informar a base legal");
  });

  it("CT-018 - Enviar o formulário sem campo telefone", () => {
    cy.shouldHaveActionsForm();

    cy.preencherFormulario({
      nome: "Guilherme",
      email: "guilherme@kunsch.com",
      telefone: "",
    });

    cy.mensagemDeSucesso("É necessário informar a base legal");
  });

  it("CT-019 - Enviar o formulário sem o campo email", () => {
    cy.shouldHaveActionsForm();

    cy.preencherFormulario({
      nome: "Guilherme",
      email: "",
      telefone: "27997523768",
    });

    cy.mensagemDeSucesso("É necessário informar a base legal");
  });

  it("CT-020 - Enviar o formulário com e-mail inválido", () => {
    cy.shouldHaveActionsForm();

    cy.preencherFormulario({
      nome: "Guilherme",
      email: "guilherme@arroba",
      telefone: "27997523768",
    });

    cy.mensagemDeErro("Preencha este campo");

    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();
    cy.mensagemDeSucesso("É necessário informar a base legal");
  });

  it.only("CT-021 - Enviar o formulário com números no campo nome", () => {
    cy.shouldHaveActionsForm();

    cy.preencherFormulario({
      nome: "27997523768",
      email: "guilherme@teste.com",
      telefone: "Guilherme",
    });

    cy.mensagemDeErro("Preencha este campo");

    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.mensagemDeSucesso("É necessário informar a base legal");
  });

  it("CT-022 - Enviar o formulário com números no campo nome", () => {
    cy.shouldHaveActionsForm();

    cy.preencherFormulario({
      nome: "Guilherme",
      email: "guilherme@kunsch.com",
      telefone: "guilherme",
    });

    cy.get('[name="validationMessage"]')
      .should("be.visible")
      .and("contain", "Preencha este campo");

    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });
});
