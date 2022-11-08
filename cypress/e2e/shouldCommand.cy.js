import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Should', function () {
    const login = new Login()

    it( 'Should',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        //should is used to create an assertion and is an alias of .and ()
        login.logInButton().should('be.visible').click()
        login.addemp().click()
    })
})