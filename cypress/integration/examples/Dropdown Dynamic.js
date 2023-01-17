/// <reference types='Cypress' />

describe('My Dynamic Dropdown Test', function() 
 {
    it('My dynamic dropdown test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
   cy.get('input[placeholder="Type to Select Countries"]').type('ind')
   cy.wait(2000)
   
   cy.get('.ui-menu-item div').each(($e1 , index, $list)=>{ 
      
      if($e1.text()==="India")
      {
         console.log($e1.text())

        cy.wrap($e1).click()
      } 
   
      })
      cy.get('#autocomplete').should('have.value', 'India')


})
})