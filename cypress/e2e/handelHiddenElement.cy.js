describe('Hidden Element', function () {
    // test case
    it('Scenario 1', function (){
   
    // launch URL
    cy.visit("https://www.amazon.com/");
   
    //click hidden element
    cy.contains('Sign').click({force:true});
    });
    });