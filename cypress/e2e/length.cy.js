before(() => {

    cy.visit("https://www.tutorialspoint.com/videotutorials/index.php")
  
  })
  
describe('ImplicitAssertions', function () {
    it('ImplicitAssertions', function (){   
    // length checks the count of elements obtained from the previously chained command
    cy.get('ul[id="responsive"]').find('li').should('have.length',5)
    .and('have.class', 'btn-menu-trigger-ind')
});
});
