/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frames Test', function() 
 {
    it('My iframe case' , function () {
        cy.visit(Cypress.env('url') + "/AutomationPractice/#/")

        // first load the frame into cypress 
        cy.frameLoaded('#courses-iframe')

        // then work in the iframe
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        // did not work

    
        })
    
    })
