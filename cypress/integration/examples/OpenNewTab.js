/// <reference types='Cypress' />

describe('My Third Test', function() 
 {
    it('My   test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")

   // stoping opening of a new tab
   cy.get('#opentab').invoke('removeAttr', 'target').click()
   cy.url().should('include', 'rahulshettyacademy')
   cy.wait(2000)
   
   // navigate backword or forward
   cy.go('back')
   cy.url().should('include', 'Automation')

   cy.wait(2000)
   cy.go('forward') 

   cy.wait(2000)
   cy.go('back') 

   //or getting the link fo the new page from href and visiting it
   cy.get('#opentab').then(function(e1)
   {
      const url = e1.prop('href')
      cy.log(url)
      cy.visit(url)

   })
   
})
})