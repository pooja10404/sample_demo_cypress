before(() => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
  
  })
describe('Tutorialspoint Test', function () {
    // test case
    it("Scenario 1", function () {
    //fire confirm browser event and accept
    cy.get(':nth-child(2) > button').click()
    cy.on("window:confirm", (t) => {
    //verify text on pop-up
    expect(t).to.equal("I am a JS Confirm");
    });
    });
   });