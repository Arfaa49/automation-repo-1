import{test, expect} from '@playwright/test'
import { LoginPage } from "../pages/LoginPage";
import {ContactPage} from "../pages/ContactPage"

test.beforeEach('website page', async({page})=>{
    await page.goto('https://automationexercise.com/login')

});

test('login test', async({page})=>{

    const login = new LoginPage(page);
    await login.signIn();
});

test('Contact us', async({page})=>{

    const contact = new ContactPage(page);
    await contact.submitContactForm();


    

});