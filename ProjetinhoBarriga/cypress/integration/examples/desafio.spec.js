/////<reference types= "cypress"/>
describe('alert', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })
    it('Passo 1', () => {
        cy.get('#formCadastrar').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.eql('Nome eh obrigatorio')
        })

        cy.get('#formNome').type('Yasmin Julia').should('have.value', 'Yasmin Julia')
        cy.get('#formCadastrar').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.eql('Sobrenome eh obrigatorio')
        })
        cy.get('[data-cy=dataSobrenome]').type('Guimarães').should('have.value', 'Guimarães')
        cy.get('#formCadastrar').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.eql('Sexo eh obrigatorio')
        })
        cy.get('[id="formSexoFem"]').click().should('have.value', 'F')
        cy.get('#formCadastrar').click()
        cy.get('#resultado').click().should('contain', 'Cadastrado!')

    })

})