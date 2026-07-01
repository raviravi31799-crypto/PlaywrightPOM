import{Page,Locator} from "@playwright/test";

export class Contactpage{
    readonly page:Page;
    readonly contact:Locator;
    readonly email:Locator;
    readonly name:Locator;
    readonly message:Locator;
    readonly send:Locator;



    constructor(page:Page){
        this.page=page;
        this.contact=page.locator("//a[text()='Contact']");
        this.email= page.locator('#recipient-email');
        this.name=page.locator("#recipient-name");
        this.message=page.locator("#message-text");
        this.send=page.locator("//button[@onclick='send()']");

    }

     async clickcontact(){
        await this.contact.click();
     }


    async entercontactdetails(email:string,name:string,message:string){
        await this.email.fill(email),
        await this.name.fill(name);
        await this.message.fill(message);
    }
    async clicksend(){
        await this.send.click({timeout:50000});
    }
    
}