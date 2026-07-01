import{Page,Locator} from "@playwright/test";
export class Dashboardpage{
    readonly page:Page;
    readonly dashboardtitle:Locator;
    readonly quicklaunch:Locator;
    readonly timeatworkcard:Locator;
    readonly profile:Locator;
    readonly logout:Locator;
     

    constructor(page:Page){
        this.page=page;
        this.dashboardtitle=page.locator("//h6[text()='Dashboard']");
        this.quicklaunch=page.getByText("Quick Launch");
        this.timeatworkcard=page.locator("//p[text()='Time at Work']");
        this.profile=page.locator("//span[@class='oxd-userdropdown-tab']");
        this.logout=page.getByText("Logout");

    }
    async Logout(){
       await this.profile.click();
       await this.logout.click();
    }


}
