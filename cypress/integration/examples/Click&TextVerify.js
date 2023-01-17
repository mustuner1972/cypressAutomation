/// <reference types='Cypress' />

describe('My Second Test', function() 
 {
    it('My second test case' , function () {
    
   cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)

    cy.get('.products-wrapper > .products ').find('.product').each(($e1 , index, $list)=>{
    const textVeg =   $e1.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
      cy.wrap($e1).find('button').click()
    }
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.wait(2000)
    cy.contains('Place Order').click()

    // checking text - having all or including
   cy.get('button').should('have.text','Proceed')
   cy.get('.wrapperTwo').should('include.text', 'Choose')
   

        })

})