import firstcolumn from '../pageObjects/cypressTableHandle'

before(() => {

    cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/")
    
  
  })
  
describe('Cypress Table Handle', function () {
    const firstcolumns = new firstcolumn()
    // test case
    it('Cypress Table Handle', function (){   
    // identify first column
    firstcolumns.firstcolumn().each(($elm, index)=> {
    // text captured from column1
    const t = $elm.text();
    // matching criteria
    if (t.includes('Selenium')){
    // next sibling captured
    firstcolumns.firstcolumn().eq(index).next().then(function(d)
    {
    // text of following sibling
    const r = d.text()
    //assertion
    expect(r).to.contains('Open Source');
    })
    } })
    });
    });

   
       