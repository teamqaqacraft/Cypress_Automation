class LoginPage{


navigate() {
    cy.visit('/')
}

enterUserName() {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
}

enterPassword(){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
}

clickLogin(){
    // cy.xpath("//button[@type='submit']").click()
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(($text) => {

    expect($text.get(0).innerText).contains('Dashboard')
    })
}

}
export default LoginPage