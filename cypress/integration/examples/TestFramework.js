// <reference types='Cypress' />
import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage "

describe('My Framework Test', function() 
 {
    before(function()
    {
cy.fixture('example').then(function(data)
{
    this.data = data
})    
})
    it('My framework test case' , function () {

        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url') + '/angularpractice/')
        
        homePage.getEditBox().type(this.data.name)
        homePage.getEditBox().should('have.value', this.data.name)

        homePage.getGender().select(this.data.gender)

        //homePage.getTwoWayDataBinding().should('have.text' , this.data.name)
        homePage.getEditBox().should('have.attr' , 'minlength', '2')
        homePage.getEnterpreneurBtn().should('be.disabled')
        homePage.getShopTab().click()  
        
        // selecting 2 products and verifyng the cart page
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')
         //cy.get("a[class ='nav-link btn btn-primary']").click()
        //cy.get("td[class='text-right'] strong").should('have.text', '₹. 115000')

    this.data.productName.forEach(function(element)  {
        cy.selectProduct(element)
    })

    productPage.checkoutBtn().click()
    var sum = 0 

    //prices of the items -> tr td[class='col-sm-1 col-md-1 text-center']:nth-child(4)
    cy.get("tr>td[class='col-sm-1 col-md-1 text-center']:nth-child(4)").each(($el , index, $list)=>
    {
        const itemPrice = $el.text()
        cy.log(itemPrice)
        console.log(itemPrice)

        // converting string to int
        var priceToInt = itemPrice.split(" ")
        //priceToInt= priceToInt[1].trim()
        cy.log(priceToInt[1]) 
        console.log(priceToInt[1])
        sum= Number(sum) + Number (priceToInt[1])
    }).then(function()
    {
        cy.log(sum) 
    console.log(sum)
})

var totalPriceInt=0
cy.get("h3>strong").each(($e2 , index , $list)=>
{
    const totalPrice = $e2.text()
    cy.log(totalPrice)
    var totalPriceSplit = totalPrice.split(" ")
    totalPriceInt = Number(totalPriceSplit[1])
    cy.log(totalPriceInt)

    expect(sum).to.equal(totalPriceInt)
    
}
)  
    productPage.checkOutCartPage().click() 
    productPage.countryBox().type('India')
    cy.wait(8000)
    productPage.countrySuggestions().click()
    productPage.checkBoxAggrement().click()
    productPage.purchaseBtn().click()
    
    productPage.successPurchase().should('have.text', 'Success!')
    // or 
    productPage.successPurchase().then(function(element)
    {
        const actualText = element.text()
        console.log(actualText)
        expect(actualText.includes('Success')).to.be.true
    })          

    })
})