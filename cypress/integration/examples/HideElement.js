/// <reference types='Cypress' />

describe('My Dynamic Dropdown Test', function() 
 {
    it('My dynamic dropdown test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
   cy.get('#displayed-text').should('be.visible')
   cy.get('#hide-textbox').click()
   cy.wait(2000)
   cy.get('#displayed-text').should('not.be.visible')
   cy.get('#show-textbox').click()
})
})