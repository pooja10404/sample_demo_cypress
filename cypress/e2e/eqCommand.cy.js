import eqCommand from '../pageObjects/eqCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('eq command', function () {
    const login = new Login()
    const eqcommand = new eqCommand()

    it( 'eq command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        eqcommand.sidebar().click()
    })

})