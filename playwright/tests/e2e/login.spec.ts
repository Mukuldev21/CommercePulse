import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';

test('login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    // Add login steps here
});
