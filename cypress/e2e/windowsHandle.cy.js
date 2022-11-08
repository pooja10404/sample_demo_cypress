import windowsHandleCommand from '../pageObjects/windowsHandle'

before(() => {

    cy.visit("https://the-internet.herokuapp.com/windows")
  
  })

describe('window', function () {
    const windowsHandleCommands = new windowsHandleCommand()
    // test case
   it('window', function (){
   // delete target attribute with invoke for link
   windowsHandleCommands.clickhere()
   .invoke('removeAttr', 'target').click()
   cy.wait(2000)
   // verify tab url
   cy.url()
   .should('include', 'https://the-internet.herokuapp.com/windows/new')
   // shift to parent window
   cy.go('back');
    });
   });