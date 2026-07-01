import{test,expect} from "../fixtures/demoblazefixture";
import contact from "../testdata/contact.json";

test.describe("Contact",()=>{
    test.beforeEach("Launch url",async({Loginpage})=>{
        await Loginpage.launch();
    });
    test("Contact",async({contactpage})=>{
        await contactpage.clickcontact();
        await contactpage.entercontactdetails(
            contact.contactdetails.email,
            contact.contactdetails.name,
            contact.contactdetails.message
        );

   
   
        contactpage.page.on("dialog",async(alert)=>{
            const text=alert.message();
            expect(text).toEqual("Thanks for the message!!");
            await alert.accept();
        });
        await contactpage.clicksend();
    });
});