import { Page, Locator } from "@playwright/test";
import { loginData } from "../testdata/loginData";

export class LoginPage {
    readonly page: Page;
    readonly userEmail: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userEmail = page.getByPlaceholder('Email Address').nth(1);
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async signIn() {
        await this.userEmail.fill(loginData.email);
        await this.password.fill(loginData.password);
        await this.loginButton.click();
    }
}
