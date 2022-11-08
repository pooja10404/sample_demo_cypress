import checkbyId from '../pageObjects/checkCommandtoSelectbyId'

before(() => {

    cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
  
  })

describe('checkvaluebyId', function () {
    const CheckbyId = new checkbyId()

    it( 'checkvaluebyId',function() {
        //The command used to check the checkbox having class check with an option
        CheckbyId.checkvaluebyId().check({force: true})
    })
})