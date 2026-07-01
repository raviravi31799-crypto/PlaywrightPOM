import{test as base,expect} from "@playwright/test";
import {loginpage} from '../pages/Demoblazeloginpage.js';
import { Contactpage } from "../pages/Demoblazecontactpage.js";
import{logout} from "../pages/DemoblazeLogoutpage.js";

type Fixtures={
    Loginpage:loginpage;
    contactpage:Contactpage;
    logoutpage:logout;
};

export const test=base.extend<Fixtures>({
    Loginpage:async({page},use)=>{
        await use(new loginpage(page));
    },
    contactpage:async({page},use)=>{
        await use(new Contactpage(page));
    },
    logoutpage:async({page},use)=>{
        await use(new logout(page));
    }

    
});
export{expect};