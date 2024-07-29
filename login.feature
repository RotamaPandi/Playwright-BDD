Feature: verify login

    Scenario: Verify user is able to login with valid creadentials
     Given I navigate to "https://demoblaze.com/index.html"
     And I click on "login"
     And I enter the Username "admin"
     And I enter the password "admin"
     And I click on login button
     Then user should accessed the credentials and display the text welcome admin