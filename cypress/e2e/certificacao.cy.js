describe("Testando a aplicação", () => {
  it("Validando o primeiro botão de Saiba Mais", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.get("#ivw5ng").should("have.attr", "href", "https://rubeus.com.br/");
  });

  it("Enviando o formulário com dados válidos", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.window().should((win) => {
      expect(win.ActionsForm).to.exist;
    });
    cy.get('[name="pessoa.nome"]')
      .type("Teste testando")
      .should("have.value", "Teste testando");
    cy.get(".iti__selected-country-primary")
      .click()
      .should("contain", "Brazil");
    cy.get("[name='pessoa.telefonePrincipal']")
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get('[name="pessoa.emailPrincipal"]')
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");
    cy.get(
      '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
    ).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it("Enviando formulário sem o e-mail", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.window().should((win) => {
      expect(win.ActionsForm).to.exist;
    });
    cy.get(".iti__selected-country-primary")
      .click()
      .should("contain", "Brazil");
    cy.get("[name='pessoa.telefonePrincipal']")
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get('[name="pessoa.emailPrincipal"]')
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(
      '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
    ).click();
  });

  it("Enviando formulário sem o e-mail", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.window().should((win) => {
      expect(win.ActionsForm).to.exist;
    });
    cy.get('[name="pessoa.nome"]')
      .type("Teste testando")
      .should("have.value", "Teste testando");

    cy.get('[name="pessoa.emailPrincipal"]')
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com");

    cy.get(
      '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
    ).click();
  });

  it("Enviando o formulário com dados válidos", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.window().should((win) => {
      expect(win.ActionsForm).to.exist;
    });
    cy.get('[name="pessoa.nome"]')
      .type("Teste testando")
      .should("have.value", "Teste testando");
    cy.get(".iti__selected-country-primary")
      .click()
      .should("contain", "Brazil");
    cy.get("[name='pessoa.telefonePrincipal']")
      .type("27997523768")
      .should("have.value", "27 99752-3768");
    cy.get(
      '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
      { force: true },
    ).click();

    cy.get(".toast", { timeout: 10000 }).should(
      "contain",
      "É necessário informar a base legal",
    );
  });

  it.only("Validando o segundo botão de Saiba Mais", () => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    cy.get("#ixy3u1").should("have.attr", "href", "https://rubeus.com.br/");
  });
});
