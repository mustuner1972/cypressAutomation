/// <reference types='Cypress' />

describe('My Dropdown Test', function() 
 {
    it('My dropdown test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
   cy.get('select').select('option2').should('have.value', 'option2')
   
  

})
})