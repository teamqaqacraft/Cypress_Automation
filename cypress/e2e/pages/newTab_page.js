/// <reference types = "cypress"/>

class NewTab {


    navigate() {
        cy.visit('https://practice-automation.com/')
    }
    
    openNewTab() {
     cy.get('strong > a').invoke('removeAttr', 'target').click()
    }

}
export default NewTab