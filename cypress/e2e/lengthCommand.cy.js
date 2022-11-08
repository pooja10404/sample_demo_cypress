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
        // length checks the count of elements obtained from the previously chained command.
        eachcommands.sidebar().should('to.have.length',11)    
    })
})