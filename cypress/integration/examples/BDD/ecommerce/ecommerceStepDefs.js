import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage "

const homePage = new HomePage()
const productPage = new ProductPage()

Given('User opens Ecommerce page', function()
{
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

//When User adds items to chart
// instead of function(), we can only write ()=>
When('User adds items to chart', function()
{
    homePage.getShopTab().click()  
    this.data.productName.forEach(function(element)  {
        cy.selectProduct(element)
    })
    productPage.checkoutBtn().click()
})

//    And User validates the total price
When ('User validates the total price', ()=>
{
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
})
})

//    Then User selects the coutry and verify Thank you
Then('User selects the coutry and verify Thank you', ()=>
{
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
