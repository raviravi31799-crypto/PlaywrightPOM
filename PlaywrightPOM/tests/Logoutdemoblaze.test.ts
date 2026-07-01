
import{test,expect} from "../fixtures/demoblazefixture";
import { Loginpage } from "../pages/Loginpage";
import Logindata from "../testdata/Logindata.json";

test.describe("Logout through login",()=>{
    test.beforeEach(async({Loginpage})=>{
         await Loginpage.launch();
         await Loginpage.clickloginlink();
         await Loginpage.entervaliddata(
            Logindata.validuser.username,
            Logindata.validuser.password
         );
    await expect(Loginpage.successmsg).toContainText(Logindata.validuser.successmsg);

    });
    test("Logout",async({logoutpage})=>{
         await logoutpage.clicklogout();
    });
    test.afterEach("Loginvisible",async({Loginpage})=>{
        await expect(Loginpage.loginlink).toBeVisible();
        console.log("Logged out successfully");
    });
    
    
})