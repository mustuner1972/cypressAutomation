/// <reference types='Cypress' />

describe('My Third Test', function() 
 {
    it('My third test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")

   // click an invisible btn
   //cy.get('div.mouse-hover-content').invoke('show')

   // or forcing to click an invisible btn
   cy.get("a[href='#top']").click({force:true})
   cy.url().should('include', 'top')
 
})
})