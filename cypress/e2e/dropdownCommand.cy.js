import dropdownCommand from '../pageObjects/checkCommandtoSelectbyId'

before(() => {

    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
  
  })

describe('checkyvalue', function () {
    const dropdown = new dropdownCommand()

    it( 'checkyvalue',function() {

        dropdown.dropdownCommand().select('India')
    })
})