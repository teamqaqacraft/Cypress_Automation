import CusCommand from "../pages/custom_command_page";



const custom_command_page = new CusCommand;
beforeEach(()=> {
    custom_command_page.nevigate();

})
it('Cus Command',()=> {
    custom_command_page.command();
})