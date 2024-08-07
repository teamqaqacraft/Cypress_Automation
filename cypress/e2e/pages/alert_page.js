

class Alert {

   navigate() {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    }

   alert() {
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert', (t)=>{
            expect(t).to.contain('I am a JS Alert');
            cy.get('#result').should('have.text', 'You successfully clicked an alert');
        })
    }

    confirm_alert() {

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(p)=> {
            expect(p).to.contain('I am a JS Confirm');
            
        })
        cy.on('window:confirm', () => false);

        cy.get('#result').should('have.text', 'You clicked: Cancel');
    }

    Prompt_alert() {

        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('Testing')
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result').should('have.text', 'You entered: Testing');
    }

    authentication_alert() {

        // Approch 1 
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth : 
            {
                username: "admin", 
                password : "admin"
            }
        })

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations');

    }

    authentication_alert_2() {
        // Approch 2

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations');
    }

}
export default Alert