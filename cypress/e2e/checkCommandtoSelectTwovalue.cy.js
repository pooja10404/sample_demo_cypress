import checkbyId from '../pageObjects/checkCommandtoSelectbyId'

before(() => {

    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
  
  })

describe('checkyvalue', function () {
    const CheckbyId = new checkbyId()

    it( 'checkyvalue',function() {

        CheckbyId.checkbyvalue().check(['red','blue'])
    })
})