import{Page,Locator} from "@playwright/test";

export class logout{
    readonly page:Page;
    readonly logoutbtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.logoutbtn=page.locator("#logout2");

    }
   
    async clicklogout(){
        await this.logoutbtn.click();
    }
}