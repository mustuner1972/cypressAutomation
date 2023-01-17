/// <reference types='Cypress' />

describe('My Alert Test', function() 
 {
    it('My alert test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
   
  // alert btn is clicked and alert with a message displayed is clicked
  // cypress automatically clicks the alert ok btn 
   cy.get('#alertbtn').click()

  //checking the text of an alert
  cy.on('window:alert', (str) =>
  {
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

  }
  ) 
  cy.get('#confirmbtn').click()

cy.on('window:confirm' , (str)=>
{
  expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
})
})