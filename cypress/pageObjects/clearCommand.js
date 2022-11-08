class clear {
    myinfo() {
        return cy.get('.oxd-main-menu-item--name').contains('My Info')
    }
    empname() {
        return cy.get('.orangehrm-firstname')
    }
    
}
export default clear