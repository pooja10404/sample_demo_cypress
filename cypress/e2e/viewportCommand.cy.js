import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //viewport  manages the dimension and positioning of the screen.
    cy.viewport(375, 667)
  
  })

describe('Login', function () {
    const login = new Login()

    it( 'Sign in',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        login.more().click()
        login.moreAddemp().click()
    })
})