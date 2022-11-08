import eachcommand from '../pageObjects/eachCommand'
import Login from '../pageObjects/login'
before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Contains command', function () {
    const login = new Login()
    const eachcommands = new eachcommand()

    it( 'Contains command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        // each obtains an element having a specific text
          eachcommands.sidebar().each((element, index, list) => {
            // Returns the current li element
            expect(Cypress.$(element)).to.be.visible;
        
            // Returns the index of the loop
            expect(index).to.be.greaterThan(-1);
        
            // Returns the elements from the cy.get command
            expect(list).to.have.length(11);
        });
    })
})