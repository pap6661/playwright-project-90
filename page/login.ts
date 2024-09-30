import {Page} from '@playwright/test';

export class LoginPage {
    page: Page

    constructor(page: Page) {
        this.page = page;
        
    }
    usernameCorrect: string = 'adm';
    passwordCorrect: string = '123'
    loginURL: string = 'http://127.0.0.1:5173/#/login';

    usernameInput = () => this.page.getByLabel('Username *');
    passwordInput = () => this.page.getByLabel('Password *');
    imgLock = () => this.page.locator('.MuiAvatar-root');
    btnSignIn = () => this.page.locator('.MuiButton-root');
    warningUsername = () => this.page.locator('#username-helper-text');
    warningPassword = () => this.page.locator('#password-helper-text');
    warningMessage = () => this.page.getByRole('alert')

    async goto(){
        await this.page.goto(this.loginURL)
    }

    async  loginCorrect () {
        await this.usernameInput().fill(this.usernameCorrect);
        await this.passwordInput().fill(this.passwordCorrect);
        await this.btnSignIn().click()
    }

}
