import selectMultipleOptions from '../pageObjects/selectMultipleOptionCommand'

before(() => {
    cy.visit("http://demos.codexworld.com/multi-select-dropdown-list-with-checkbox-jquery/")
  
  })

describe('selectMultipleOption', function () {
    const selectMultipleOption = new selectMultipleOptions()

    it( 'selectMultipleOption',function() {
        selectMultipleOption.selectMultipleOptions().select(["Java","PHP"],{force: true})
    })
})

