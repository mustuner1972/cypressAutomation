class ProductPage
{

    checkoutBtn()
    {
        return cy.get('a[class="nav-link btn btn-primary"]')
    }

    checkOutCartPage()
    {
        return cy.get("button[class= 'btn btn-success']")
    }

    countryBox()
    {
        return cy.get("input[id='country']")
    }

    countrySuggestions()
    {
        return cy.get("div[class='suggestions'] > ul > li > a")
    }

    checkBoxAggrement()
    {
        return cy.get('label[for="checkbox2"]')
    }

    purchaseBtn()
    {
        return cy.get("input[type='submit']")
    }

    successPurchase()
    {
        return cy.get('div[class="alert alert-success alert-dismissible"] > strong')
    }

    totalPrice()
    {
        return cy.get('h3>strong')
    }
}

// to make Home Page available for every class, we use export
export default ProductPage; 