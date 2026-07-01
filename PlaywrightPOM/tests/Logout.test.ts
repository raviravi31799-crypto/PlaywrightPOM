import{test,expect} from "../fixtures/baseFixture.js";
import Logindata from "../testdata/Logindata.json" ;


test.describe("Logout",()=>{
    test.beforeEach('Login',async({loginPage,dashboardpage})=>{
        await loginPage.navigate();
        await loginPage.login(
            Logindata.validlogin.username,
            Logindata.validlogin.password
        );
        await expect(dashboardpage.dashboardtitle).toHaveText('Dashboard');
    });
    test("Logout",async({dashboardpage})=>{
        await dashboardpage.Logout();
    });
    test.afterEach("Login visible",async({loginPage})=>{
        await expect (loginPage.logintitle).toHaveText("Login");
    });
});
