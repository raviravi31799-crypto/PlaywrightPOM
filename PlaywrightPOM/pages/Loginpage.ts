import{Page,Locator} from "@playwright/test";

export class Loginpage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;
    readonly logintitle:Locator;
    readonly errormessage:Locator;


    constructor(page:Page){
        this.page=page;

        this.username=page.locator("//input[@placeholder='Username']");
        this.password=page.locator("//input[@placeholder='Password']");
        this.loginbutton=page.getByRole('button',{name:' Login '});
        this.logintitle=page.locator("//h5[text()='Login']");
        this.errormessage=page.locator(".oxd-alert-content.oxd-alert-content--error");

    }
    async navigate(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        {
            waitUntil: 'domcontentloaded'
        }
    }
    async getlogintitle(){
        return await this.logintitle.textContent();

    }
    async login(username:string,password:string){
        await (this.username).fill(username);
        await (this.password).fill(password);
        await this.loginbutton.click();

    }
    async geterrormessage(){
        return await this.errormessage.textContent();
    }


}