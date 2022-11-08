import Login from '../pageObjects/login'
before(() => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
  })

describe('Explicit Assertions', function () {
    const login = new Login()

    it( 'Explicit Assertions',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        login.logInButton().should('be.visible').click()
        login.addemp().click()
        login.addemp().then(function(e){
            const t = e.text()
            // assertion expect
            expect(t).to.contains('Add Employee')
        })
    
    })
})