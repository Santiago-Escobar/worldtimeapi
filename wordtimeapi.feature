# Test Cases for api/timezone

  Feature: Fetch Valid Timezones
    Rule: America/Santiago's Timezone should be available
      Example: Get all valid Timezones
        Given the list of valid timezones
        When the API is requested (GET method)
        Then a response body with status 200 is received
        And a array of timezones should be returned
        And "America/Santiago" should be included in the array


  Feature: Fetch Bogota Timezone
    Rule: Bogota timezone details should be returned
      Example: Get Bogota Timezone details
        Given a specific timezone (Bogota Timezone)
        When the API America/Bogota is requested
        Then a JSON object should be returned
        And a response body with status 200 is received
        And the day of week is 3

      Example: Get Bogota Timezone with url typo
        Given a specific timezone (Bogota Timezone)
        When the API America/Bogotá is requested
        Then a JSON object should be returned
        And a error message should be displayed
