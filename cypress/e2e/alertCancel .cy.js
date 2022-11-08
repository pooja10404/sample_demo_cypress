describe('Alert Cancel', function () {
    // test case
    it("Alert Cancel", function () {
    // URL launched
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //fire confirm browser event
    cy.on("window:confirm", (s) => {
    return false;
    });
    // click on Click for JS Confirm button
    cy.get(':nth-child(2) > button').click()
    // verify application message on Cancel button click
    cy.get('#result').should('have.text', 'You clicked: Cancel')
    });
   });
   