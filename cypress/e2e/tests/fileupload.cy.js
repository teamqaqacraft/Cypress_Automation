/// <reference types = "cypress"/>
import FileUpload from "../pages/fileupload_page"


const fileupload_page = new FileUpload();
beforeEach ('File Upload',() =>{

    fileupload_page.navigate("https://demo.imacros.net/Automate/FileUploadDemo");
})

it('Upload File', () => {

    fileupload_page.uploadFile();
    
})

it('Download File', () => {

    fileupload_page.downloadFiles();
    
})