import {test,expect} from "../fixtures/demoblazefixture";
import { loginpage } from "../pages/Demoblazeloginpage";
import Logindata from "../testdata/Logindata.json";

test.describe("Login Tests",()=>{
    test.beforeEach("Navigate",async({Loginpage})=>{
        await Loginpage.launch();
    });

    test("Login",async({Loginpage})=>{
        await Loginpage.clickloginlink();
        await Loginpage.entervaliddata(
            Logindata.validuser.username,
            Logindata.validuser.password
        );
     await expect(Loginpage.successmsg).toContainText(Logindata.validuser.successmsg);
     console.log("Valid login using json is successful");
    })
})