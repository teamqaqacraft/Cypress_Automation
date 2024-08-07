/// <reference types = "cypress"/>


class FileUpload {

navigate(url) {
    cy.visit(url)
}

uploadFile() {
    cy.get('#uploaded_file').selectFile('Sample.json')
}

downloadFiles() {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','image.jpg')
}

}
export default FileUpload