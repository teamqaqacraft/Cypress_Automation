import LoginPage from "../pages/login_page"

const login_page = new LoginPage()

beforeEach('Login Orange',() => {
    login_page.navigate()
})

describe('Login Test', () =>{
it('Login HRM',() =>{

    login_page.enterUserName()
    login_page.enterPassword()
    login_page.clickLogin()
})
})
