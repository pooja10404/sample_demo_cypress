import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('wait', function () {
    const login = new Login()

    it( 'wait',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        //Wait for a certain time in milliseconds or for an aliased element prior to moving the following step
        cy.wait(5000)
        login.logInButton().should('be.visible').click()
        login.addemp().click()
    })
})