
import{test,expect} from '../fixtures/baseFixture.js';
import { Loginpage } from '../pages/Loginpage.js';
import Logindata from '../testdata/Logindata.json' ;

test.describe("Logintest",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    
    });
    test('Valid',async({loginPage,dashboardpage})=>{
        await loginPage.login(
            Logindata.validlogin.username,
            Logindata.validlogin.password
        );
        await expect(dashboardpage.dashboardtitle).toHaveText('Dashboard');
    });
    test('Invalid',async({loginPage})=>{
        await loginPage.login(
            Logindata.invalidlogin.username,
            Logindata.invalidlogin.password
        );
        await expect(loginPage.errormessage).toHaveText('Invalid credentials');
    });


});
