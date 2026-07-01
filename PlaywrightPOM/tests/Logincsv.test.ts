import{test,expect} from '../fixtures/baseFixture.js';
import { readLogindata,Loginuser } from '../utils/csvReader.js';

const users:Loginuser[]=readLogindata();
console.log('CSV data:',users);

const validuser=users.find(user=>user.type==='valid');
const invaliduser=users.find(user=>user.type ==='invalid');

test.describe("Login",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    });
    test("validlogin",async({loginPage,dashboardpage})=>{
        if(!validuser){
            throw new Error("Valid user not found");
        }
         await loginPage.login(
            validuser.username,
            validuser.password
            
         );

    await expect(dashboardpage.dashboardtitle).toBeVisible();
    });
    test("Invalid login",async({loginPage})=>{
        if(!invaliduser){
            throw new Error("Invalid user data is not found ");
        }
        await loginPage.login(
            invaliduser.username,
            invaliduser.password
        );
        await expect(loginPage.errormessage).toHaveText("Invalid credentials");
    })
})