import uploadFile from '../pageObjects/fileUpload'
before(() => {

    cy.visit("https://the-internet.herokuapp.com/upload")
  })

describe('File Upload', function () {
    const upload_File = new uploadFile()
    // test case
    it('File Upload', function (){
    //file to be uploaded path in project folder
    const p = 'demo.jpg'    
    //upload file with attachFile
    upload_File.upload_File().attachFile(p)
    //click on upload
    upload_File.file_submit().click()
    //verify uploaded file
    upload_File.uploaded_files().contains('demo')
    });
    });
   