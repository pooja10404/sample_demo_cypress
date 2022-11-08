import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  
  })

describe('Click', function () {
    const login = new Login()

    it( 'Click',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        //click clicks an element in Document Object Model (DOM)
        login.addemp().click()
        //clearCookies removes cookies
        cy.clearCookies()
    })
})