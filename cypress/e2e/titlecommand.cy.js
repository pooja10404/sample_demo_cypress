import Login from '../pageObjects/login'

before(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  })

describe('title', function () {
    const login = new Login()

    it( 'title',function() {

        login.username().click()
        login.username().type('Admin')
        login.password().type('admin123')
        //should is used to create an assertion and is an alias of .and ()
        login.logInButton().should('be.visible').click()
        login.addemp().click()
        //title obtains the document.title of the active page.
        cy.title().should('include', 'Orange')
        cy.title().should('contain', 'OrangeHRM')
        cy.title().should('contains', 'HRM')
    })
})