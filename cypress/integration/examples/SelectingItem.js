/// <reference types='Cypress' />

describe('My First Test', function() 
 {
    it('My first test case' , function () {
    
   cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    cy.get('.product:visible').should('have.length' ,4)
    cy.get('.products').find('.product').should('have.length', 4)

    
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    //cy.get(':nth-child(3) > .product-action > button').click()

    cy.get('.products-wrapper > .products ').find('.product').each(($e1 , index, $list)=>{
    const textVeg =   $e1.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
      cy.wrap($e1).find('button').click()
    }

    })
    cy.get('.brand').as('logoSelector')

    //asserttion of logo text is dispalyed correctly
    cy.get('@logoSelector').should('have.text', 'GREENKART')

    // writing the text of the logo button 
    cy.get('@logoSelector').then(function(logoElement)
    {
      cy.log(logoElement.text())
    })

      // how to write a text on Cypress console (cypress/inspect/console)
    cy.get('.brand').then(function()
    {
      console.log('merhaba')
    })
    })

})