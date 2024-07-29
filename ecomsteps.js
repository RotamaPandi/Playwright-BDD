import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

// 1. Missing step definition for "ecomlogin.feature:6:6"
Given('I navigate to {string}', async ({ page }, url) => {
  await page.goto(url);
});

// 2. Missing step definition for "ecomlogin.feature:7:6"
Given('I click on {string}', async ({ page }, My_account) => {
    await page.pause()
  await page.locator("//a[@id='login2']").click();
});

// 3. Missing step definition for "ecomlogin.feature:8:6"
Given('I enter E-mail Address {string}', async ({ page }, emailAddress) => {
  await page.getByPlaceholder('E-Mail Address').fill.apply(emailAddress);
});

// 4. Missing step definition for "ecomlogin.feature:9:6"
Given('I enter password {string}', async ({ page }, password) => {
  await page.getByPlaceholder('Password').fill.apply(password);
});

// 5. Missing step definition for "ecomlogin.feature:10:6"
Given('I click on submit button', async ({ page }) => {
  await page.locator("input[value='login']").click();
});

// 6. Missing step definition for "ecomlogin.feature:11:6"
Then('I should verify url contains {string}', async ({ page }, logged_url) => {
    await page.close();
  await expect(page).toHaveURL(new RegExp(logged_url));
});