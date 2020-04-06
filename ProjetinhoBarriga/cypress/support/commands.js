Cypress.Commands.add('ClickAlert', (locator, message) => {
    cy.get(locator).click()
    cy.on('window:alert', msg => {
        expect(msg).to.be.eql(message)
    })
})
Cypress.Commands.add('login', (user, passwrd) => {
    cy.visit('http://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('a@a')
    cy.get(loc.LOGIN.PASSWORD).type('a')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})
Cypress.Commands.add('reset', () => {
    cy.get(loc.MENU.SET).click()
    cy.get(loc.MENU.RESET).click()
})