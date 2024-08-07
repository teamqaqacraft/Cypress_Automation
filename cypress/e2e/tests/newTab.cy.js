import NewTab from "../pages/newTab_page"

const newTab_page = new NewTab()

beforeEach('Login Orange', function() {
    newTab_page.navigate()
})

it('New Tab', function() {

    newTab_page.openNewTab()
    
})