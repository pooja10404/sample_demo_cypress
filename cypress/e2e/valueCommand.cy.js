import valueCommand from '../pageObjects/valueCommand'
import Login from '../pageObjects/login'

before(() => {

    cy.visit('http://www.demo.amitjakhu.com/login-form/')
  
  })

describe('Contains command', function () {
    const valueCommands = new valueCommand()

    it( 'Contains command',function() {
        valueCommands.username().should('have.value','Username')
    })

})