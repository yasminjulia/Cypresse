 /// < reference types="cypress" />

 import loc from '../../support/locators'
 import '../../support/commandsConta'
 import "../../support"

 describe('Funcional tests', () => {
     before(() => {

         /*cy.login('a@a', 'a')*/
         cy.visit('http://barrigareact.wcaquino.me/login')
         cy.get(loc.LOGIN.USER).type('a@a')
         cy.get(loc.LOGIN.PASSWORD).type('a')
         cy.get(loc.LOGIN.BTN_LOGIN).click()
         cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
     })
     it('inserindo uma conta', () => {
         cy.Acessarmenuconta()
         cy.InserirConta('conta de teste')
         cy.get(loc.MESSAGE).should('contain', 'Conta  inserida')
     })
     it('Conta  de teste', () => {
         /* cy.acessarMenuConta()

          cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
          cy.get(loc.CONTAS.NOME)
              .clear()
              .type('Conta alterada')
          cy.get(loc.CONTAS.BTN_SALVAR).click()
          cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')*/

         cy.get(loc.MENU.SET).click()
         cy.get(loc.MENU.CONTAS).click()
         cy.xpath(loc.CONTAS.XP_BNT).click()
         cy.get(loc.CONTAS.NOME)
             .clear()
             .type('Conta com nome editado')
         cy.get(loc.CONTAS.BTN_SALVA).click()
         cy.get(loc.MESSAGE).should('contain', 'Conta atualizada')
     })
     it('Não criar conta repetida', () => {
         cy.Acessarmenuconta()
         cy.get(loc.CONTAS.NOME).type('Conta Alterada')
         cy.get(loc.CONTAS.BTN_SALVA).click()
         cy.get(loc.MESSAGE).should('contain', 'code 400')
     })
     it('Faz uma transação', () => {
         cy.get(loc.MENU.MOVIMENTACAO).click()
         cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Teste de Julia')
         cy.get(loc.MOVIMENTACAO.VALOR).type('150,00')
         cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Anonimous')
         cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
     })
 })
