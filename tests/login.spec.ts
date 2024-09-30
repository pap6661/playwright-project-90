import { test, expect } from '@playwright/test';
import { LoginPage } from "../page/login";
import { MainPage } from '../page/main';

test.describe('Тесты для страницы авторизации',  () => {
    let loginPage: LoginPage;
    let mainPage: MainPage;
    
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        mainPage = new MainPage(page);
        await loginPage.goto();
    
    })

    test('Позитивный сценарий входа', async () => {
        await loginPage.loginCorrect();
        await expect (mainPage.btnMenu()).toBeVisible();
    })

    test('Негативный сценарий входа', async () => {
        await loginPage.usernameInput().fill('');
        await loginPage.passwordInput().fill('');
        await loginPage.btnSignIn().click();
        expect (loginPage.warningUsername()).toBeVisible;
        expect (loginPage.warningPassword()).toBeVisible;
        expect (loginPage.warningMessage()).toBeVisible;
    })

    test('Проверка элементов на странице авторизации', async () => {
        await expect (loginPage.usernameInput()).toBeVisible();
        await expect (loginPage.passwordInput()).toBeVisible();
        await expect (loginPage.btnSignIn()).toBeVisible();
        await expect (loginPage.imgLock()).toBeVisible();
    })
    test('Проверка выхода из приложения', async () => {
        await loginPage.loginCorrect();
        await mainPage.logout;

    })

  });
  