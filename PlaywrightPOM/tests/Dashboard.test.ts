import{test,expect} from '../fixtures/baseFixture.js';
import { Dashboardpage } from '../pages/Dashboardpage.js';
import { Loginpage } from '../pages/Loginpage.js';
import Logindata from "../testdata/Logindata.json" ;

test.describe('Dashboardpage',()=>{
  test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            Logindata.validlogin.username,
            Logindata.validlogin.password
        );
  });
  test.afterEach(async({dashboardpage})=>{
    await dashboardpage.Logout();
  });
   test('Verify quicklaunch',async({dashboardpage})=>{
    await expect(dashboardpage.quicklaunch).toBeVisible();
   });
   test("Verify time atwork",async({dashboardpage})=>{
      await expect(dashboardpage.timeatworkcard).toBeVisible();
   });

});