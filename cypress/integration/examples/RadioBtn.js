/// <reference types='Cypress' />

describe('My Third Test', function() 
 {
    it('My third test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
   
   cy.get('input[value="radio2"]').click().should('be.checked')
  // or cy.get('input[value="radio2"]').check()

})
})