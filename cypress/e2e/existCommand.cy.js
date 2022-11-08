import and from '../pageObjects/andCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('exist command', function () {
    const login = new Login()
    const andcommand = new and()

    it( 'exist command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        // contains obtains an element having a specific text
        andcommand.addemp().contains('Add Employee').click()
        //exist checks whether the web element is available in Document Object Model (DOM)
        andcommand.addemp().should('exist','oxd-topbar-body-nav-tab-item')
    })
})