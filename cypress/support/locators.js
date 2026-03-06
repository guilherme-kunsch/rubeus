const locators = {
  FORMULARIO: {
    NOME: '[name="pessoa.nome"]',
    REGIAO: ".iti__selected-country-primary",
    TELEFONE: "[name='pessoa.telefonePrincipal']",
    EMAIL: '[name="pessoa.emailPrincipal"]',
    BOTAO_AVANCAR:
      '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
  },

  FORMULARIO_SITE: {
    BOTAO_AVANCAR: '[name="rbBtnNext"]',
  },
};

export default locators;
