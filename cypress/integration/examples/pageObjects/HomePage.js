class HomePage
{

    getEditBox()
    {
        return cy.get("form input[name='name']")
    }

    getTwoWayDataBinding()
    {
        return cy.get(":nth-child(4) > .ng-touched")
        //return cy.get("input[class='ng-pristine ng-valid ng-touched']")
        //input[class="ng-pristine ng-valid ng-touched"]
        
    }

    getGender()
    {
        return cy.get('select[class="form-control"]')
                //or cy.get('select').select(this.data.gender) 

    }

    getEnterpreneurBtn()
    {
        return cy.get("input[id='inlineRadio3']")
    }

    getShopTab()
    {
        return cy.get("a[href='/angularpractice/shop']")
    }
}

// to make Home Page available for every class, we use export
export default HomePage; 