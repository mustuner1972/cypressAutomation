/// <reference types='Cypress' />

describe('My Third Test', function() 
 {
    it('My third test case' , function () {
    
   cy.visit(Cypress.env('url') +"/AutomationPractice/#/")
   
   cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
  //input[id*='Option1']  
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

  cy.get('input[type="checkbox"]').check(['option2', 'option3'])

})
})