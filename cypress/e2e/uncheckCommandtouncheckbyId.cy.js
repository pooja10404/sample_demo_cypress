import checkbyId from '../pageObjects/checkCommandtoSelectbyId'

before(() => {

    cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
  
  })

describe('checkvaluebyId', function () {
    const CheckbyId = new checkbyId()

    it( 'checkvaluebyId',function() {

        CheckbyId.checkvaluebyId().check({force: true})
        cy.wait(5000)
        CheckbyId.checkvaluebyId().uncheck({force: true})
    })
})