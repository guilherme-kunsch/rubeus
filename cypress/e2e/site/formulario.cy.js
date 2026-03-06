import loc from "../../support/locators";

describe("Enviando formulário", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/site");
  });
  it("CT-016 - Enviar o formulário com informações válidas", () => {
    cy.shouldHaveActionsForm();

    cy.get(loc.FORMULARIO.NOME)
      .click()
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get(loc.FORMULARIO.EMAIL)
      .click()
      .type("guilherme@teste.com")
      .should("have.value", "guilherme@teste.com");

    cy.get(loc.FORMULARIO.REGIAO).should("contain", "Brazil");

    cy.get(loc.FORMULARIO.TELEFONE)
      .click()
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it("CT-017 - Enviar o formulário sem o nome", () => {
    cy.shouldHaveActionsForm();

    cy.get(loc.FORMULARIO.EMAIL)
      .click()
      .type("guilherme@teste.com")
      .should("have.value", "guilherme@teste.com");

    cy.get(loc.FORMULARIO.REGIAO).should("contain", "Brazil");

    cy.get(loc.FORMULARIO.TELEFONE)
      .click()
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it("CT-018 - Enviar o formulário sem campo telefone", () => {
    cy.shouldHaveActionsForm();

    cy.get(loc.FORMULARIO.NOME)
      .click()
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get(loc.FORMULARIO.EMAIL)
      .click()
      .type("guilherme@teste.com")
      .should("have.value", "guilherme@teste.com");

    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it.only("CT-019 - Enviar o formulário sem o campo email", () => {
    cy.shouldHaveActionsForm();

    cy.get(loc.FORMULARIO.NOME)
      .click()
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get(loc.FORMULARIO.REGIAO).should("contain", "Brazil");

    cy.get(loc.FORMULARIO.TELEFONE)
      .click()
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(loc.FORMULARIO_SITE.BOTAO_AVANCAR).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });
});
