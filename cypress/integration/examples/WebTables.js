/// <reference types='Cypress' />

describe('My Third Test', function() 
 {
    it('My third test case' , function () {
    
   cy.visit(Cypress.env('url') + "/AutomationPractice/#/")

   cy.get("table[name='courses'] td:nth-child(2)").each(($e1, index , $list) =>
   {

    const text = $e1.text()
    console.log(text)

     if(text.includes("Python"))
    {
      cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
      {
        const priceText=   price.text()
        expect(priceText).to.equal('25')
       })
      }
   })
})
})