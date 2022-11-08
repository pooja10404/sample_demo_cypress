before(() => {

    cy.visit("https://register.rediff.com/register/register.php");
  
  })

describe('Alert Text Verification', function () {
    // test case
   it('Alert Text Verification', function (){   
   // click submit
   cy.get('input[type="submit"]').click();
   // fire event with method on
   cy.on('window:alert',(t)=>
   {
    //assertions
    expect(t).to.contains('Your full name');
    })
    }); 
   });
   