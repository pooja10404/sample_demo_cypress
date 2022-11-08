import Login from '../pageObjects/login'
import check from '../pageObjects/checkCommand'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('check', function () {
    const login = new Login()
    const checkcommand = new check()

    it( 'check',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        // check checks radio buttons or checkboxes and is applied to elements having input tags. 
        checkcommand.record().check({force: true})
    })
})