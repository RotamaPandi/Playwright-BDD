import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

// 1. Missing step definition for "login.feature:8:6"
Given('I enter the Username {string}', async ({}, arg) => {
  // ...
});

// 2. Missing step definition for "login.feature:9:6"
Given('I enter the password {string}', async ({}, arg) => {
  // ...
});

// 3. Missing step definition for "login.feature:10:6"
Given('I click on login button', async ({}) => {
  // ...
});

// 4. Missing step definition for "login.feature:11:6"
Then('user should accessed the credentials and display the text welcome admin', async ({}) => {
  // ...
});