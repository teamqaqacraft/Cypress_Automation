/// <reference types = "cypress"/>

class CusCommand{

    nevigate() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    command() {
       cy.login('admin@yourstore.com','admin')
    }

    
}
export default CusCommand