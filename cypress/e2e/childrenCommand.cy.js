import children from '../pageObjects/childrenCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Children command', function () {
    const login = new Login()
    const childrencommand = new children()

    it( 'Children command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        //obtains children of element
        childrencommand.addbtn().and('be.visible').click()
    })

})