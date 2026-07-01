import{test as base,expect} from "@playwright/test";
import {Loginpage} from '../pages/Loginpage.js';
import { Dashboardpage } from "../pages/Dashboardpage.js";


type Fixtures={
    loginPage:Loginpage;
    dashboardpage:Dashboardpage
};

export const test=base.extend<Fixtures>({
    loginPage:async ({page},use)=>{
        await use(new Loginpage(page));
    },
    dashboardpage:async ({page},use)=>{
        await use(new Dashboardpage(page));
    },
    
});
export {expect};