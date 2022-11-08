import findCommand from '../pageObjects/findCommand'

// before(() => {

//     cy.visit('http://www.autopract.com/#/home/fashion')
//   })

describe('find', function () {
    const find = new findCommand()

    it( 'find',function() {
        // close a popup that occurs immediately after the load.
        find.popupclose().click()
        // navigating to the sites side list section where all the categories are placed.
        find.sideMenu().click()
        find.subMenu().should('be.visible')
        //first obtains the first element from a group of elements.
        find.sidebarMenu().first('li a').contains(' clothing ').should('be.visible')  

    })

})

