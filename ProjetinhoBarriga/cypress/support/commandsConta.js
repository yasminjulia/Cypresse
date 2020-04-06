import loc from './locators.js'

Cypress.Commands.add('Acessarmenuconta', () => {
    cy.get(loc.MENU.SET).click()
    cy.get(loc.MENU.CONTAS).click()
})
Cypress.Commands.add('InserirConta', conta => {
    cy.get(loc.CONTAS.NOME).type('conta de teste')
    cy.get(loc.CONTAS.BTN_SALVA).click()
})