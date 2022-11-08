before(() => {

    cy.visit("https://register.rediff.com/register/register.php");
  
  })
describe('Alert', function () {
    // test case
   it('Alert', function (){
   // click submit
   cy.get('input[type="submit"]').click();
    });
   });
   