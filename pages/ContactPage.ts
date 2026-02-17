import { Page, Locator } from "@playwright/test";
import { contactData } from "../testdata/contactData";

export class ContactPage {
    readonly page: Page;
    readonly contactLink: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactLink = page.getByRole('link', { name: 'Contact us' });
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.getByPlaceholder('Email').nth(1);
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async submitContactForm() {
        await this.contactLink.click();
        await this.nameInput.fill(contactData.name);
        await this.emailInput.fill(contactData.email);
        await this.submitButton.click();
    }
}
