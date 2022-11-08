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
        //visible checks whether the web element is visible
        login.logInButton().should('be.visible').click()
        login.addemp().click()
    })
})