Feature: verify login

    verify user is able to login with valid and invalid credentials

    Scenario: Verify user is able to login with valid creadentials
     Given I navigate to "https://ecommerce-playground.lamdatest.io/"
     And I click on "My account"
     And I enter E-mail Address "pranav@testroverautomation.com"
     And I enter password "Test1234"
     And I click on submit button
     Then I should verify url contains "route=account/account"