 /////<reference types= "cypress"/>

 import loc from '../../support/locators'
 import '../../support/commandsConta'

 describe('Funcional tests', () => {

     before(() => {

         cy.login('a@a', 'a')
         cy.reset()
             /* cy.visit('http://barrigareact.wcaquino.me/')
              cy.get(loc.LOGIN.USER).type('a@a')
              cy.get(loc.LOGIN.PASSWORD).type('a')
              cy.get(loc.LOGIN.BTN_LOGIN).click()
              cy.get(loc.MESSAGE).should('contain', 'Bem vindo')*/
     })
     it('inserindo uma conta', () => {
         cy.Acessarmenuconta()
         cy.InserirConta('conta de teste')
         cy.get(loc.MESSAGE).should('contain', 'Conta  inserida')
     })
     it('Conta  de teste', () => {
         cy.get(loc.MENU.SET).click()
         cy.get(loc.MENU.CONTAS).click()
         cy.xpath(loc.CONTAS.XP_BNT).click()
         cy.get(loc.CONTAS.NOME).clear()
             .type('Conta com nome editado')
         cy.get(loc.CONTAS.BTN_SALVA).click()
         cy.get(loc.MESSAGE).should('contain', 'Conta atualizada')
     })
     it('Não criar conta repetida', () => {
         cy.Acessarmenuconta()
         cy.get(loc.CONTAS.NOME).type('Conta Alterada')
         cy.get(loc.CONTAS.BTN_SALVA).click()
         cy.get(loc.MESSAGE).should('contain', 'erro 400')
     })
 })