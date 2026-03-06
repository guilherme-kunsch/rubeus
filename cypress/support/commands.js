// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from "./locators";

Cypress.Commands.add("shouldHaveActionsForm", () => {
  cy.window().should((win) => {
    expect(win.ActionsForm).to.exist;
  });
});

Cypress.Commands.add(
  "validarRedirecionamento",
  (seletor, dominio, identificador) => {
    cy.get(seletor).invoke("removeAttr", "target").click();
    cy.url().should("include", dominio);
    if (identificador) {
      cy.url().should("include", identificador);
    }
  },
);

Cypress.Commands.add("preencherFormulario", (dados) => {
  if (dados.nome) {
    cy.get(loc.FORMULARIO.NOME).type(dados.nome);
  }

  if (dados.email) {
    cy.get(loc.FORMULARIO.EMAIL).type(dados.email);
  }

  cy.get(loc.FORMULARIO.REGIAO).should("contain", "Brazil");

  if (dados.telefone) {
    cy.get(loc.FORMULARIO.TELEFONE).type(dados.telefone);
  }
});

Cypress.Commands.add("mensagemDeSucesso", (mensagem) => {
  cy.get(".toast", { timeout: 10000 })
    .should("be.visible")
    .and("contain", mensagem);
});

Cypress.Commands.add("mensagemDeErro", (mensagem) => {
  cy.get('[name="validationMessage"]')
    .should("be.visible")
    .and("contain", mensagem);
});
