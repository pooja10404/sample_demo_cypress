import doubleClick from '../pageObjects/doubleClickCommand'

before(() => {

    cy.visit('https://mousetester.com/') 
  
  })

describe('Double Click', function () {
    const doubleClickcommad = new doubleClick()

    it( 'Double Click',function() {

        //dblclick double-clicks an element in Document Object Model (DOM).
        doubleClickcommad.clickhere().dblclick() 
    })
})