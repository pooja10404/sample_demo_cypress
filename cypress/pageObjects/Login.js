class login {
    username() {
        return cy.get('input[name="username"]')
    }
    password() {
        return cy.get('input[name="password"]')
    }
    logInButton() {
        return cy.get('button[type="submit"]')
    }
    more() {
        return cy.get('.oxd-topbar-body-nav-tab-item').contains('More')
    }
    addemp() {
        return cy.get('.oxd-topbar-body-nav-tab-item').contains('Add Employee')
    }
    moreAddemp() {
        return cy.get('.oxd-topbar-body-nav-tab-link.--more').contains('Add Employee')
    }
    logo() {
        return cy.get('.oxd-brand-logo')
    }
    checkbox() {
        return cy.get('input[type="checkbox"]')
    }
}
export default login