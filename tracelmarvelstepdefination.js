const { Given, When, Then } = require('cucumber');
const travelmarvelpage = require('./travelmarvelpage');
//import { ClientFunction } from 'testcafe';




//**************************** */Home page validation */******************************//

Given('I navigate to Travel Marvel page', async function () {

    await testController.navigateTo('https://qa2.travelmarvel.com.au/?ip=116.240.204.120')
    console.log('I navigate to Travel Marvel page')
});

When('I click on Explore Trip' , async function () {
 
    await testController.click(travelmarvelpage.travelmarvelhomepage.exploretrip())
    console.log('I click on Explore Trip')
});

Then('I click Why to choose' , async function () {
    await testController.click(travelmarvelpage.travelmarvelhomepage.whytochoose())
    console.log('I click Why to choose')
});

Then('I am able to see contact details' , async function () {
    await testController.click(travelmarvelpage.travelmarvelhomepage.telephone())
    console.log('I am able to see contact details')
});

Then('I am able to see Login button' , async function () {
   
    await testController.click(travelmarvelpage.travelmarvelhomepage.loginbtn())
    console.log('I am able click Login button')
});

//search a trip in travel marvel

Then('I am able to select where to' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.Whereto())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Asia'))
    console.log('I am able to select where to')
    
});

Then('I am able to select travelby' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.travelby())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Land Journey'))
    console.log('I am able to select travelby')

    
});

Then('I am able to select Howlong' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.howlong())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('a week'))
    console.log('I am able to select travelby')
    
});
Then('I am able to click submit' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.submitbtn())
    console.log('I am able to click submit')
    
    
});
Then('I am able see search results' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.resultstm())
    console.log('I am able see search results')
    
});
Then('I am able to sort by high to low' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.sortfilter())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Price high to low'))

    console.log('I am able to select high to low')
    
    
});
Then('I am able see search results high to low' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.resultstm())
    console.log('I am able see search results')
    
});
Then('I am able to sort by low to high' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.sortfilter())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Price low to high'))

    console.log('I am able to select low to high')
    
    
});
Then('I am able see search results low to high' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.resultstm())
    console.log('I am able see search results')
    
});
Then('I am able to sort by popularity' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.sortfilter())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Popularity'))

    console.log('I am able to select popularity')
    
    
});
Then('I am able see search results popularity' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.resultstm())
    console.log('I am able see search results')
    
});

  // ************News Letter Sign up ******************************//

Given('I navigate to Travel Marvel home page', async function () {
    await testController.navigateTo('https://qa2.travelmarvel.com.au/?ip=116.240.204.120')
    console.log('I navigate to Travel Marvel home page')

});

When('I select title' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.title())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Mr'))
    console.log('I select title')

});

Then('I enter first name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.firstname(),'Shanth')
    console.log('I enter first name')
});

Then('I enter last name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.lastname(),'Kumar')
    console.log('I enter last name')

});

Then('I enter email id' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.emailid(),'shantkumar.laxmanrao@aptouring.com.au')
    console.log('I enter email id')

});
Then('I click on sign up' , async function () {
   
    await testController.click(travelmarvelpage.travelmarvelhomepage.signup())
    console.log('I click on sign up')

});
Then('I see news letter confirmation' , async function () {
   
    await testController.click(travelmarvelpage.travelmarvelhomepage.newsletterconfirmation())
    console.log('I see news letter confirmation')

});

              //Contact US//
Given('I navigate to Travel Marvel contact us home page', async function () {
    await testController.navigateTo('https://qa2.travelmarvel.com.au/about-us/contact-us?ip=116.240.204.120')
    console.log('I navigate to Travel Marvel contact us home page')

});

When('I select topic', async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.selecttopic())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Bookings'))
    console.log('I select topic')

});
Then('I select contact us title' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.selectcontactustitle())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Mr'))
    //return pending;
    console.log('I select contact us title')

});

Then('I enter contact us first name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.contactusfirstname(),'Shanth')
    console.log('I enter first name')
});

Then('I enter contact us last name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.contactuslastname(),'kumar')
    console.log('I enter last name')

});
Then('I select contact us country' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.selectcontactuscountry())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Australia'))
    console.log('I select contact us country')

});
Then('I select contact us state' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.selectcontactusstate())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('ACT'))
    console.log('I select contact us state')

});
Then('I enter postalcode' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.contactuspostalcode(),'5000084')
    console.log('I enter postal code')

});
Then('I enter contact number' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.contactnumberconstactus(),'9845467590')
    console.log('I enter contact number')

});
Then('I enter contact us email id' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.emailcontactus(),'shantkumar.laxmanrao@aptouring.com.au')
    console.log('I enter contact us email id')

});
Then('I enter on message' , async function () {
   
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.messagecontactus(),'Hello Testing')
    console.log('I enter on message')

});
Then('I click on submit enquiry' , async function () {
   
    await testController.click(travelmarvelpage.travelmarvelhomepage.submitenquiry())
    console.log('I click on submit enquiry')

});


////////* Request Quote******/////////////////////////////////////////////////////////////////////////

Given('I navigate to Travel Marvel home page to request quote', async function () {

    await testController.navigateTo('https://qa2.travelmarvel.com.au/')
    console.log('I navigate to Travel Marvel page')
});

When('I click on request quote' , async function () {
 
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquote())
    console.log('I click on request quote')
});
Then('I select Requestquote month' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquotemonth())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Feb'))
    console.log('I select Requestquote month')

});
Then('I select Requestquote year' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquoteyear())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('2020'))
    console.log('I select Requestquote year')

});
Then('I enter request quote first name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquotefirstname(),'Shanth')
    console.log('I enter request quote first name')

});
Then('I enter request quote Last Name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquotelastname(),'Kumar')
    console.log('I enter request quote Last Name')

});
Then('I select Request quote title' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquotetitle())
    await
    //await testController.click(travelmarvelpage.travelmarvelhomepage.requestquotealttitle())
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect()).withExactText('Br')
    console.log('I select Request quote title')

});

Then('I select Requestquote Country' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquotecountry())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Afghanistan'))
    console.log('I select Requestquote Country')

});
Then('I select radio button as Mobile' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquoteselectradio())
    console.log('I enter request quote Last Name')

});
Then('I enter phone number in request quote' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquotephonenumber(),'98454675588')
    console.log('I enter phone number in request quote')

});
Then('I enter alt phone number in request quote' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquotephonenumberalt(),'975555555555')
    console.log('I enter alt phone number in request quote')

});
Then('I enter best time to call' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquotetimetocall(),'9-5')
    console.log('I enter alt phone number in request quote')

});
Then('I enter email id in request quote' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquoteemail(),'shantkumar.laxmanrao@aptouring.com.au')
    console.log('I enter alt phone number in request quote')

});
Then('I enter confirm email id in request quote' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquoteemailcnf(),'shantkumar.laxmanrao@aptouring.com.au')
    console.log('I enter confirm email id in request quote')

});
Then('I enter Message request quote' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.requestquotemessage(),'testing ignore')
    console.log('I enter Message request quote')

});
Then('I select newsleeter subscription in requestquote' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquotenewsletteropt())
    console.log('I select newsleeter subscription in requestquote')

});
Then('I click on request quote button' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.requestquotenewsletteropt())
    console.log('I click on request quote button')

});

/////////************************************Enquiry now for single trip********************************////////

Given('I navigate to Travel Marvel home page to enquiry a perticular trip', async function () {

    await testController.navigateTo('https://qa2.travelmarvel.com.au/trips/new-zealand/nt16?ip=116.240.204.120')
    console.log('I navigate to Travel Marvel home page to enquiry a perticular trip')
});

When('I click enquiry prices' , async function () {
 
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquiryprice())
    console.log('I click enquiry prices')
});
Then('I click on enquiry price in seating and pricing section' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.clickenquiryprice())
    console.log('I click on enquiry price in seating and pricing section')
});
Then('I click on seat selection in seating and pricing section' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.clickenquirycabin())
    console.log('I click on seat selection in seating and pricing section')
});
Then('I click on continue to enquiry button' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirycontinuebutton())
    console.log('I click on continue to enquiry button')
});
Then('I click on enquiry now button' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirybutton())
    console.log('I click on continue to enquiry button')
});
Then('I select enquiry title' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirytitle())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Mr'))
    console.log('I select enquiry title')

});
Then('I enter first name in enquiry form' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.enquiryfirstname(),'shanth')
    console.log('I enter first name in enquiry form')

});
Then('I enter last name in enquiry form' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.enquirylastname(),'Kumar')
    console.log('I enter first name in enquiry form')

});
Then('I enter email address in enquiry form' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.enquiryemailid(),'shantkumar.laxmanrao@aptouring.com.au')
    console.log('I enter email address in enquiry form')

});
Then('I enter day time contact in enquiry form' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.enquiryphonenumber(),'9888855555855')
    console.log('I enter day time contact in enquiry form')

});
Then('I enter day time contact timing enquiry form' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.enquirytimetocall(),'9-5')
    console.log('I enter day time contact timing enquiry form')

});
Then('I select enquiry country enquiry form' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirycountry())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Australia'))
    console.log('I select enquiry country')

});
Then('I enter postal code in enquiry form' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.enquirypostalcode(),'5000084')
    console.log('I enter day time contact timing enquiry form')

});
Then('I opt for newsletter in enquiry form' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirynewsletter())
    console.log('I opt for newsletter in enquiry form')

});
Then('I click on confirmed enquiry button' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirybuttonconf())
    console.log('I click on confirmed enquiry button')

});
Then('I validate successful confirm enqiry' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquiryconfirmation())
    console.log('I validate successful confirm enqiry')

});

/////////////****************** TRip Page********** */
Given('I navigate to Travel Marvel trip page', async function () {

    await testController.navigateTo('https://qa2.travelmarvel.com.au/trips/new-zealand/nt16/?ip=116.240.204.120')
    console.log('I navigate to Travel Marvel home page to enquiry a perticular trip')
});

When('I click on availble prices' , async function () {
 
    await testController.click(travelmarvelpage.travelmarvelhomepage.enquiryprice())
    console.log('I click on availble prices')
});
Then('I click on avaible price in seating and pricing section' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.clickenquiryprice())
    console.log('I click on avaible price in seating and pricing section')
});
Then('I click on seat in seating and pricing section' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.clickenquirycabin())
    console.log('I click on seat in seating and pricing section')
});
Then('I click on continue to booking page' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.enquirycontinuebutton())
    console.log('I click on continue to booking page')
});
Then('I click on book now button' , async function () {

    await testController.click(travelmarvelpage.travelmarvelhomepage.booknow())
    console.log('I click on book now button')
});
Then('I select title in form1' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1selecttitle())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Mr'))
    console.log('I select title in form1')

});
Then('I enter first name in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1firstname(),'Shanth')
    console.log('I enter first name in form1')

});
Then('I enter last name in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1lastname(),'Shanth')
    console.log('I enter last name in form1')

});
Then('I select gender in form1' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1gender())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Male'))
    console.log('I select gender in form1')

});
Then('I enter address in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1address(),'Shanth')
    console.log('I enter address in form1')

});
Then('I select country in form1' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1country())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Australia'))
    console.log('I select country in form1')

});
Then('I select state in form1' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1state())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('ACT'))
    console.log('I select state in form1')

});

Then('I enter zip code in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1zip(),'5000084')
    console.log('I enter zip code in form1')

});
Then('I enter subcity in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1subcity(),'Melbourne')
    console.log('I enter subcity in form1')

});
Then('I enter email in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1email(),'shantkumar.laxmanrao@aptouring.com.au')
    console.log('I enter email in form1')

});
Then('I enter contact details in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1contactno(),'98887855555')
    console.log('I enter contact details in form1')

});
Then('I select contact method in form1' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1contactmethod())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Phone'))
    console.log('I select contact method in form1')

});
Then('I click passport details in form1' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1passportclick())
    console.log('I click passport details in form1')

});
Then('I enter passport number in form1' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1passportno(),'H56454544')
    console.log('I enter passport number in form1')

});
Then('I select passport country' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form1countryname())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('American Samoa'))
    console.log('I select passport country ')

});
Then('I enter dob in passport' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1dob(),'21-12-2045')
    console.log('I enter dob in passport')

});
Then('I enter diet plan in passport' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1diet(),'Italian')
    console.log('I enter diet plan in passport')

});
Then('I enter Health details in passport' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form1health(),'Health NA')
    console.log('I enter Health details in passport')

});
Then('I select title form2' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form2selecttitle())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Mr'))
    console.log('I select title form2')

});
Then('I enter first name in form2' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form2firstname(),'Shhhhhh')
    console.log('I enter first name in form2')

});
Then('I enter last name in form2' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.form2lastname(),'Fcccc')
    console.log('I enter last name in form2')

});
Then('I select gender form2' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.form2selectgender())
    await testController.click(travelmarvelpage.travelmarvelhomepage.commonselect().withText('Male'))
    console.log('I select gender form2')

});

Then('I click continue navigate to booking summary page' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.formbuttoncontinue())
    console.log('I click continue navigate to booking summary page')

});
Then('I click confirm booking summary page' , async function () {
    
    await testController.click(travelmarvelpage.travelmarvelhomepage.continuepaymentbtn())
    console.log('I click confirm booking summary page')

});
Then('I enter Credit card name' , async function () {
    
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.payeename(),'shanthkumaar')
    console.log('I enter Credit card name')
    //await testController.pressKey('tab')

});
Then('I enter credit card number' , async function () {
    await testController.switchToIframe('[name="braintree-hosted-field-number"]')
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.payeecardnum(),'4111111111111111')
    console.log('I enter credit card number')
    await testController.switchToMainWindow()



});
Then('I enter Expiry date' , async function () {
    await testController.switchToIframe('[name="braintree-hosted-field-expirationDate"]')
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.Payeeexpirycardno(),'08/22')
    console.log('I enter Expiry date')
    await testController.switchToMainWindow()

});
Then('I enter Cvv number' , async function () {
    await testController.switchToIframe('[name="braintree-hosted-field-cvv"]')
    await testController.typeText(travelmarvelpage.travelmarvelhomepage.payeecvvno(),'856')
    console.log('I enter Cvv number')
    await testController.switchToMainWindow()

});
Then('I checked Terms and Condition' , async function () {
    //await testController.executescript(accepttermsandcondition,removeclass('hide'))
    await testController.click(travelmarvelpage.travelmarvelhomepage.accepttermsandcondition())
    console.log('I checked Terms and Condition')
    

});
Then('I Click on Payment confirmation' , async function () {
    //await testController.executescript(accepttermsandcondition,removeclass('hide'))
    await testController.click(travelmarvelpage.travelmarvelhomepage.paymentconf())
    console.log('I Click on Payment confirmation')
    

});
Then('I Validate booking confirmation' , async function () {
    //await testController.executescript(accepttermsandcondition,removeclass('hide'))
    await testController.click(travelmarvelpage.travelmarvelhomepage.bookingconf())
    console.log('I Validate booking confirmation')
    

});
