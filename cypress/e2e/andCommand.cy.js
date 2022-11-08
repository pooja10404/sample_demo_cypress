import and from '../pageObjects/andCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('And command', function () {
    const login = new Login()
    const andcommand = new and()

    it( 'And command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        // and command will check both that element will contain Add Employee and check element is visible 
        andcommand.addemp().contains('Add Employee').and('be.visible').click()
    })

})