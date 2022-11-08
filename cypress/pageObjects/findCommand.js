class findCommand {
    popupclose() {
        return cy.get('.close')
    }  
    sideMenu() {
        return cy.get('.bar-style')
    } 
    subMenu() {
        return cy.get('#sub-menu')
    }
    sidebarMenu() {
        return cy.get('ul[id="sub-menu"]')
    } 
}
export default  findCommand 