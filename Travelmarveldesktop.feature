Feature: Sample Form

    As a user
    I want to fill out the form
    So that the company recieves my information

 Scenario: Home Page Validation
        Given I navigate to Travel Marvel page
        When I click on Explore Trip 
        Then I click Why to choose
        Then I am able to see contact details
        Then I am able to see Login button
        Then I am able to select where to
        Then I am able to select travelby
        Then I am able to select Howlong
        Then I am able to click submit
        Then I am able see search results
        Then I am able to sort by high to low
        Then I am able see search results high to low
        Then I am able to sort by low to high
        Then I am able see search results low to high
        Then I am able to sort by popularity
        Then I am able see search results popularity

    
 Scenario: Singup up News letter
        Given I navigate to Travel Marvel home page
        When I select title
        Then I enter first name
        Then I enter last name
        Then I enter email id
        Then I click on sign up
        Then I see news letter confirmation

    

 Scenario: Contact US - Form submission
        Given I navigate to Travel Marvel contact us home page
        When I select topic
        Then I select contact us title
        Then I enter contact us first name
        Then I enter contact us last name
        Then I select contact us country
        Then I select contact us state
        Then I enter postalcode
        Then I enter contact number
        Then I enter contact us email id
        Then I enter on message
        Then I click on submit enquiry

 Scenario: Request Quote  - form submission
        Given I navigate to Travel Marvel home page to request quote 
        When I click on request quote
        Then I select Requestquote month
        Then I select Requestquote year
        #Then I select Request quote title
        Then I enter request quote first name
        Then I enter request quote Last Name
        Then I select Requestquote Country
        Then I select radio button as Mobile
        Then I enter phone number in request quote
        Then I enter alt phone number in request quote
        Then I enter email id in request quote
        Then I enter confirm email id in request quote
        Then I enter Message request quote
        Then I select newsleeter subscription in requestquote
        Then I click on request quote button


  Scenario: enquiry a trip - form submission
        Given I navigate to Travel Marvel home page to enquiry a perticular trip
        When I click enquiry prices
        Then I click on enquiry price in seating and pricing section
        Then I click on seat selection in seating and pricing section
        Then I click on continue to enquiry button
        Then I click on enquiry now button
        Then I select enquiry title
        Then I enter first name in enquiry form
        Then I enter last name in enquiry form
        Then I enter email address in enquiry form
        Then I enter day time contact in enquiry form
        Then I enter day time contact timing enquiry form
        Then I select enquiry country enquiry form
        Then I enter postal code in enquiry form
        Then I opt for newsletter in enquiry form
        Then I click on confirmed enquiry button
        Then I validate successful confirm enqiry


 Scenario: Book a trip - form submission
        Given I navigate to Travel Marvel trip page
        When I click on availble prices
        Then I click on avaible price in seating and pricing section
        Then I click on seat in seating and pricing section
        Then I click on continue to booking page
        Then I click on book now button
        Then I select title in form1
        Then I enter first name in form1
        Then I enter last name in form1
        Then I select gender in form1
        Then I enter address in form1
        Then I select country in form1
        Then I select state in form1
        Then I enter zip code in form1
        Then I enter subcity in form1
        Then I enter email in form1
        Then I enter contact details in form1
        Then I select contact method in form1
        Then I click passport details in form1
        Then I enter passport number in form1
        #Then I select passport country
        Then I enter dob in passport
        Then I enter diet plan in passport
        Then I enter Health details in passport
        #Then I select title form2
        #Then I enter first name in form2
        #Then I enter last name in form2
        #Then I select gender form2
        Then I click continue navigate to booking summary page
        Then I click confirm booking summary page
        Then I enter Credit card name
        Then I enter credit card number
        Then I enter Expiry date
        Then I enter Cvv number
        Then I checked Terms and Condition
        Then I Click on Payment confirmation
        #Then I Validate booking confirmation
        













        