class checkbyId {
    checkvaluebyId() {
        return cy.get('#checkbox-mini-0')
    }
    checkbyvalue() {
        return cy.get('input[type="checkbox"]')
    }
}
export default checkbyId