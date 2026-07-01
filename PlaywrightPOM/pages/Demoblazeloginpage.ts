import{Page,Locator} from "@playwright/test";

export class loginpage{
    readonly page:Page;
    readonly loginlink:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;
    readonly successmsg:Locator;
    // readonly errormsg:Locator;
    // readonly warning:Locator;

    constructor(page:Page){
        this.page=page;
        this.loginlink=page.locator("//a[@id='login2']");
        this.username=page.locator("//input[@id='loginusername']");
        this.password=page.locator("//input[@id='loginpassword']");
        this.loginbutton=page.locator("//button[@onclick='logIn()']");
        this.successmsg=page.locator("#nameofuser");
        
    }
    async launch(){
        await this.page.goto("https://www.demoblaze.com/index.html");

    }
    async clickloginlink(){
        await this.loginlink.click();
    }
    async entervaliddata(username:string,password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
    async getsuccessmsg(){
        await this.successmsg.textContent();
    }
}
