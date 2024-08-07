import Alert from "../pages/alert_page";

const alert_page = new Alert();
beforeEach('Alert', () => {

    alert_page.navigate();
})

it('Alert Test', () => {

    alert_page.alert();
})

it ('Alert Confirm', () => {
    alert_page.confirm_alert();
})

it ('Alert Prompt', () => {
    alert_page.Prompt_alert();
})

it ('Authentication', () => {
    alert_page.authentication_alert();
})
it ('Authentication', () => {
    alert_page.authentication_alert_2();
})