class children {
    addbtn() {
        //obtains children of element 
        return cy.get('.orangehrm-header-container').children()
    }
}
export default children