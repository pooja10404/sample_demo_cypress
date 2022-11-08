import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Login', function () {
    const login = new Login()

    it( 'Sign in',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        // log prints the messages to the Command Log.
        cy.log('Cypress logging ')
        login.addemp().click()
    })
})