import select from '../pageObjects/selectByValueCommand'

beforeEach(() => {

    cy.visit("https://www.bstackdemo.com/")
  
  })

describe('selectbyValue', function () {
    const selectbyValue = new select()

    it( 'selectbyValue',function() {

        selectbyValue.select().select("lowestprice").invoke("val").should("eq", "lowestprice")
    })
})
