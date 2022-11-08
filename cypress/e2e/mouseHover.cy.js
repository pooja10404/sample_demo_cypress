import btnMouseHover from '../pageObjects/mouseHover'
before(() => {

    cy.visit("https://courses.letskodeit.com/practice")
  
  })
  
describe('Mouse Hover', function () {
    const btnMouse = new btnMouseHover()
    it('Mouse Hover', function (){  
        //btnMouse.btnMouse().click() 
        // show hidden element with invoke
        btnMouse.btnMouse().invoke('show');
        //click hidden element
        cy.contains('Top').click();
});
});
   