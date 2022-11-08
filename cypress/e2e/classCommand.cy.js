import and from '../pageObjects/andCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('Class command', function () {
    const login = new Login()
    const andcommand = new and()

    it( 'Class command',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        // contains obtains an element having a specific text
        andcommand.addemp().contains('Add Employee').click()
        andcommand.addemp().should('have.class','oxd-topbar-body-nav-tab-item')
    })
})