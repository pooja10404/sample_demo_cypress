class uploadFile {
    upload_File() {
        return cy.get('#file-upload')
    }
    file_submit() {
        return cy.get('#file-submit')
    }
    uploaded_files() {
        return cy.get('#uploaded-files')
    }
}
export default uploadFile