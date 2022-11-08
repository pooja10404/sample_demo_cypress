import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //clearCookie removes a particular website cookies
    cy.clearCookie('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Click', function () {
    const login = new Login()

    it( 'Click',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        login.addemp().click()
    })
})