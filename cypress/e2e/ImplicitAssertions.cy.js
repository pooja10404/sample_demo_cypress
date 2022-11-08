before(() => {

    cy.visit("https://www.tutorialspoint.com/videotutorials/index.php")
  
  })
  
describe('ImplicitAssertions', function () {
    it('ImplicitAssertions', function (){   
    // assertion to validate count of sub-elements and class attribute value
    cy.get('ul[id="responsive"]').find('li').should('have.length',5)
    .and('have.class', 'btn-menu-trigger-ind')
});
});
