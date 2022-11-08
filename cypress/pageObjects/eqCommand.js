class eqCommand {
    sidebar() {
        // It refers to an element at a particular index in an array of elements
        return cy.get('.oxd-main-menu-item-wrapper').eq(3)
    }  
}
export default  eqCommand 
