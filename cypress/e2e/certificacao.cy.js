import loc from "../support/locators";

describe("Testando a aplicação de certificação", () => {
  before(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });
  it("Validando o primeiro botão de Saiba Mais", () => {
    cy.get("#ivw5ng").should("have.attr", "href", "https://rubeus.com.br/");
  });

  it("Enviando o formulário com dados válidos", () => {
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

  it("Enviando formulário sem o nome", () => {
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

  it("Enviando formulário sem o telefone", () => {
    cy.shouldHaveActionsForm();
    cy.get(loc.FORMULARIO.NOME)
      .type("Teste testando")
      .should("have.value", "Teste testando");

    cy.get(loc.FORMULARIO.EMAIL)
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(loc.FORMULARIO.BOTAO_AVANCAR).click();
  });

  it("Enviando o formulário com o email", () => {
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

  it("Validando o segundo botão de Saiba Mais", () => {
    cy.get("#ixy3u1").should("have.attr", "href", "https://rubeus.com.br/");
  });

  it("Validando botão de Facebook", () => {
    cy.get("#io0o4o").should(
      "have.attr",
      "href",
      "https://www.facebook.com/CanalRubeus",
    );
  });

  it("Validando botão do Instagram", () => {
    cy.get("#il7i3x").should(
      "have.attr",
      "href",
      "https://www.instagram.com/canalrubeus/",
    );
  });

  it("Validando botão do Linkedin", () => {
    cy.get("#i2m2tn").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/company/rubeus/",
    );
  });

  it("Validando botão do Youtube", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.get("#ifpwp7").should(
      "have.attr",
      "href",
      "https://www.youtube.com/@Rubeus",
    );
  });
});
