import {Page} from '@playwright/test';

export class MainPage {
    page: Page

    constructor(page: Page) {
        this.page = page;
        
    }
   
    btnMenu = () => this.page.getByLabel('Close menu');
    imgUser = () => this.page.getByLabel('Profile')
    btnLogout = () => this.page.getByRole('menuitem', { name: 'Logout' })
    btnDashboard = () => this.page.getByRole('menuitem', { name: 'Dashboard'})
    btnTasks = () => this.page.getByRole('menuitem', { name: 'Tasks'})
    btnUsers = () => this.page.getByRole('menuitem', { name: 'Users'})
    btnLabels = () => this.page.getByRole('menuitem', { name: 'Labels'})
    btnTaskStatuses = () => this.page.getByRole('menuitem', { name: 'Task statuses'})

    async  logout () {
        await this.imgUser().click();
        await this.btnLogout().click();
    }
}