import clear from '../pageObjects/clearCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Clear command', function () {
    const login = new Login()
    const clearcommand = new clear()


    it( 'Clear command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        clearcommand.myinfo().and('be.visible').click()
        // clear removes the value from textarea or input.  
        clearcommand.empname().clear()
    })

})