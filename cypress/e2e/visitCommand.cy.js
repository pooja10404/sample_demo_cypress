import Login from '../pageObjects/login'

before(() => {
    //visit launches an URL. 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('visit', function () {
    const login = new Login()

    it( 'visit',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        login.addemp().click()
    })
})