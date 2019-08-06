const {Selector} = require('testcafe');
//report = require('../report-generator')

//Changing dom  to X-path locator
const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});  



//page object for travel marvel home page

    const exploretrip = Selector(elementByXPath('//a[.="Explore Trips"]'))
    const whytochoose = Selector(elementByXPath('//a[.="Why travel with us"]'))
    const telephone = Selector(elementByXPath('//ul[@class="global-nav-links"]//a[@href="tel:1300 208 712"]/span[@class="global-nav-links__label"]'))
    const loginbtn = Selector(elementByXPath('//span[@class="login-dropdown dropdown-hover-target global-nav-link"]'))
    const Whereto = Selector(elementByXPath('//select[@id="destination"]'))
    const commonselect = Selector('option')
    const travelby = Selector(elementByXPath('//select[@id="travelstyle"]'))
    const howlong = Selector(elementByXPath('//select[@id="duration"]'))
    const submitbtn = Selector(elementByXPath('//div[@class="btn-wrapper trip-search-widget__field -submit"]/button[@class="btn btn--secondary trip-search-widget__submit"]'))
    const sortfilter = Selector(elementByXPath('//select[@class="form-control ng-pristine ng-untouched ng-valid ng-not-empty"]'))
    const resultstm = Selector(elementByXPath('//div[@class="trip-finder-hero__search-results__text ng-binding"]'))

    //**news letter signup */
    const title = Selector(elementByXPath('//*[@id="newsletter-subscription"]//select[contains(@name,"_title")]'))
    const firstname = Selector(elementByXPath('//div[@class="form-field form-first-name col-xs-12 col-sm-3 form-group text"]/input[@class="form-control"]'))
    const lastname = Selector(elementByXPath('//div[@class="form-field form-last-name col-xs-12 col-sm-3 form-group text"]/input[@class="form-control"]'))
    const emailid = Selector(elementByXPath('//div[@class="form-field form-email col-xs-12 col-sm-3 form-group text"]/input[@class="form-control"]'))
    const signup = Selector(elementByXPath('//button[@class="button  btn btn--primary"]'))
    const newsletterconfirmation = Selector(elementByXPath('//h3[.="Thank you for signing up to our newsletter"]'))
  //BOOKING Element

    const search = Selector(elementByXPath('//input[@id="search"]'))
    const clickprice = Selector(elementByXPath('//div[@class="trip-priceandbooking__tile"]'))
    const selectno = Selector(elementByXPath('//div[@class="trip-priceandbooking__tile active"]'))
    const selectcabin = Selector(elementByXPath('//div[@class="trip-priceandbooking__tile bordered active"]'))
    const clickcontinue = Selector(elementByXPath('//div[@id="trip-priceandbooking-roomtypes-continue"]/button[@class="btn btn--primary btn--large trip-priceandbooking__continue__btn"]'))
    //const clickcontinuepromo = Selector(elementByXPath('//div[@id="trip-priceandbooking-promotions-continue"]/button[@class="btn btn--primary btn--large trip-priceandbooking__continue__btn"]'))
    const booknow = Selector(elementByXPath('//div[@class="trip-priceandbooking__book__conversion"]/a[.="Book now"]')) 
    const form1selecttitle = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[1]/div[1]/select'))
    const form1firstname = Selector(elementByXPath('//*[@id="81cf2f29471148c1ba0d2a961cd6fae6_firstname"]'))
    const form1lastname = Selector(elementByXPath('//*[@id="7c6c5c3fb75d43dd9fff05e46c1c5c65_lastname"]'))
    const form1gender = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[1]/div[4]/select'))
    const form1address = Selector(elementByXPath('//*[@id="58c286c8a7e943a5916a715869eccb99_address"]'))
    const form1country = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[1]/div[6]/select'))
    const form1state = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[1]/div[8]/select'))
    const form1zip = Selector(elementByXPath('//*[@id="958ad482d49d42d39548f50dac210fb1_postcode"]'))
    const form1subcity = Selector(elementByXPath('//*[@id="cfc104ba5bf94257a311c8ba2e0ad391_citysuburb"]'))
    const form1email = Selector(elementByXPath('//*[@id="01d9710c11bf485faa616732ccdcbfb8_emailaddress"]'))
    const form1contactno = Selector(elementByXPath('//*[@id="2172a2ef5612466ca89e02085f6680ff_phonenumber"]'))
    const form1contactmethod = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[1]/div[12]/select'))
    const form1passportclick = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[1]/div[15]/div/a'))
    const form1passportno = Selector(elementByXPath('//*[@id="343fd0f30ee94952b19ed03b260a5315_passportnumber"]'))
    const form1countryname = Selector(elementByXPath('//*[@id="4fcbb2f5-a857-435d-b96b-83324ea924ef"]/div/div[2]/select'))
    const form1dob = Selector(elementByXPath('//*[@id="69d5d5e321f34906b442dc4977ba012b_dateofbirth"]'))
    const form1diet = Selector(elementByXPath('//*[@id="8133604ad17f4a44aaba50d8868321e6_dietaryrequirements"]'))
    const form1health = Selector(elementByXPath('//*[@id="b96f35c10f15409383844c94f5430df6_medicalconditions"]'))
    const form2selecttitle = Selector(elementByXPath('//*[@id="booking-two-passenger-form"]/section/div[1]/div[16]/select'))
    const form2firstname = Selector(elementByXPath('//*[@id="eda4bdf5780243bd94ab90ba92d90554_firstnamesecond"]'))
    const form2lastname = Selector(elementByXPath('//*[@id="7144dc19de7c4220b4d5b4e15d6de5e6_lastnamesecond"]'))
    const form2selectgender = Selector(elementByXPath('//*[@id="booking-two-passenger-form"]/section/div[1]/div[19]/select'))
    const formbuttoncontinue = Selector(elementByXPath('//*[@id="booking-passenger-form"]/section/div[2]/div/button'))
    const continuepaymentbtn = Selector(elementByXPath('//button[@class="btn btn--primary btn--large booking-form__summary__next"]'))
    const payeename = Selector(elementByXPath('//*[@id="payment-gateway--card-name"]'))
    const iframe = Selector(elementByXPath('//*[@id="braintree-hosted-field-number"]'))
    const payeecardnum = Selector(elementByXPath('//*[@id="credit-card-number"]'))
    const Payeeexpirycardno = Selector(elementByXPath('//*[@id="expiration"]'))
    const payeecvvno = Selector(elementByXPath('//*[@id="cvv"]'))
    const accepttermsandcondition = Selector(elementByXPath('//*[@id="payment-gateway-form"]/section/div[1]/div[5]'))
    const paymentconf = Selector(elementByXPath('//button[@class="btn btn--primary btn--large booking-form__payment__process"]'))
    const bookingconf = Selector(elementByXPath('//i[@class="booking-form__success__icon icon-tick icon-check"]'))

    //****contact -us element */
    const selecttopic = Selector(elementByXPath('//div[@class="form-field col-xs-12 form-group phoenix-form__field-set--left select has-dependent-fields"]/select[@class="form-control"]'))
    const selectcontactustitle = Selector(elementByXPath('//div[@class="form-field col-xs-4 form-group select"]/select[@class="form-control"]'))
    const contactusfirstname = Selector(elementByXPath('//div[@class="form-field col-xs-8 form-group text"]/input[@class="form-control"]'))
    const contactuslastname = Selector(elementByXPath('//form[@id="contact-us"]//div[3]/input[@class="form-control"]'))
    const selectcontactuscountry = Selector(elementByXPath('//select[@class="form-control ng-scope"]'))
    const contactuspostalcode = Selector(elementByXPath('//div[@class="form-field col-xs-6  form-group text"]/input[@class="form-control"]'))
    const selectcontactusstate = Selector(elementByXPath('//div[@class="form-field col-xs-6 form-group select"]/select[@class="form-control"]'))
    const messagecontactus = Selector(elementByXPath('//textarea[@class="form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required"]'))
    const contactnumberconstactus = Selector(elementByXPath('//form[@id="contact-us"]//div[7]/input[@class="form-control"]'))
    const emailcontactus = Selector(elementByXPath('//form[@id="contact-us"]//div[8]/input[@class="form-control"]'))
    const submitenquiry = Selector(elementByXPath('//button[contains(.,"Send Your Enquiry")]'))


    ///// Request Quote ***///
    const requestquote = Selector(elementByXPath('//div[@class="hidden-xs"]//div[4]//a[contains(.,"Request Quote")]'))
    const requestquotemonth = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[1]/select[@class="form-control"]'))
    const requestquoteyear = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[2]/select[@class="form-control"]'))
    const requestquotetitle = Selector(elementByXPath('//div[@class="form-field col2-left col-xs-12 form-group select"]/select[@class="form-control"]'))
    const requestquotefirstname = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[4]/input[@class="form-control"]'))
    const requestquotelastname = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[5]/input[@class="form-control"]'))
    const requestquotecountry = Selector(elementByXPath('//select[@class="form-control ng-scope"]'))
    const requestquoteselectradio = Selector(elementByXPath('//label[.="Mobile"]'))
    const requestquotephonenumber = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[@class="form-field col2-left col-xs-12 form-group field-set"]/input[@class="form-control"]'))
    const requestquotephonenumberalt = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[8]/input[@class="form-control"]'))
    const requestquotetimetocall = Selector(elementByXPath('//section[@class="section row js-form-section form-f19f8bfa-bdf3-494e-b10b-5a72ca8beb8b"]//div[9]/input[@class="form-control"]'))
    const requestquoteemail = Selector(elementByXPath('//div[@class="form-field col2-left email col-xs-12 form-group text"]/input[@class="form-control"]'))
    const requestquoteemailcnf = Selector(elementByXPath('//div[@class="form-field col2-right emailconfirm col-xs-12 form-group text"]/input[@class="form-control"]'))
    const requestquotemessage = Selector(elementByXPath('//textarea[@class="form-control"]'))
    const requestquotenewsletteropt = Selector(elementByXPath('//label[.="Select to receive our eNewsletter"]'))
    const requestquotesubmit = Selector(elementByXPath('//button[@class="button  btn btn--primary request-quote-button"]'))
    const requestquotealttitle = Selector(elementByXPath('//*[@id="copy-of-request-call-back_4679"]/section/div[1]/div[3]/select/option[2]'))


////////************************Enquiry now for a perticular trip */

const enquiryprice = Selector(elementByXPath('//button[@class="btn btn--primary btn--large trip-info ng-isolate-scope"]'))
const clickenquiryprice = Selector(elementByXPath('//*[@id="trip-priceandbooking-departures"]/div[1]/div/div[1]/div/div[3]/div/div/div'))
const clickenquirycabin = Selector(elementByXPath('//div[@class="ng-scope"]//div[@class="trip-priceandbooking__tile-cell room-type"]/div[contains(.,"Single")]'))
const enquirycontinuebutton= Selector(elementByXPath('//button[@class="btn btn--primary btn--large trip-priceandbooking__continue__btn"]'))
const enquirybutton = Selector(elementByXPath('//button[@class="btn btn--secondary trip-priceandbooking__book__action-panel__cta"]'))
const enquirytitle = Selector(elementByXPath('//div[@class="form-field col-xs-4 form-group select"]/select[@class="form-control"]'))
const enquiryfirstname = Selector(elementByXPath('//div[@class="form-field col-xs-8 form-group text"]/input[@class="form-control"]'))
const enquirylastname = Selector(elementByXPath('//form[@id="booking-enquiry"]//div[3]/input[@class="form-control"]'))
const enquiryemailid = Selector(elementByXPath('//form[@id="booking-enquiry"]//div[4]/input[@class="form-control"]'))
const enquiryphonenumber = Selector(elementByXPath('//form[@id="booking-enquiry"]//div[5]/input[@class="form-control"]'))
const enquirytimetocall = Selector(elementByXPath('//form[@id="booking-enquiry"]//div[6]/input[@class="form-control"]'))
const enquirycountry =Selector(elementByXPath('//select[@class="form-control ng-pristine ng-untouched ng-valid ng-scope ng-not-empty"]'))
const enquirypostalcode = Selector(elementByXPath('//div[@class="form-field col-xs-4 form-group text"]/input[@class="form-control"]'))
const enquirynewsletter = Selector(elementByXPath('//label[.="Okay"]'))
const enquirybuttonconf = Selector(elementByXPath('//button[@class="btn btn--primary btn--large trip-priceandbooking__book__cta-container__btn"]'))
const enquiryconfirmation = Selector(elementByXPath('//i[@class="trip-priceandbooking__confirmation__icon icon-tick icon-check"]'))

///Functions for home page

exports.travelmarvelhomepage = {
    
    exploretrip: function() {

        return exploretrip.with({ boundTestRun: testController });
    },
    whytochoose: function() {

        return whytochoose.with({boundTestRun: testController});
    },
    telephone: function() {

        return telephone.with({boundTestRun: testController});
    },
    loginbtn: function() {

        return loginbtn.with({boundTestRun: testController});
    },
    Whereto: function() {

        return Whereto.with({boundTestRun: testController});
    },
    travelby: function() {

        return travelby.with({boundTestRun: testController});

    },
    howlong: function() {

        return howlong.with({boundTestRun: testController});

    },
    submitbtn: function() {

        return submitbtn.with({boundTestRun: testController});

    },
    resultstm: function() {

        return resultstm.with({boundTestRun: testController});

    },

    //News letter Sign UP
    sortfilter: function(){
        return sortfilter.with({boundTestRun:testController});
    },
    title: function() {

        return title.with({boundTestRun: testController});

    },
    firstname: function() {

        return firstname.with({boundTestRun: testController});

    },
    lastname: function() {

        return lastname.with({boundTestRun: testController});
    },
    emailid: function() {

        return emailid.with({boundTestRun: testController});

    },
    signup: function() {

        return signup.with({boundTestRun: testController});
    },
    newsletterconfirmation: function() {

        return newsletterconfirmation.with({boundTestRun: testController});
    },
    commonselect: function() {

        return commonselect.with({boundTestRun: testController});
    },
    search: function() {
        return search.with({boundTestRun:testController});

    },

    //Contact Us

    selecttopic: function(){
        return selecttopic.with({boundTestRun:testController})
    },
    selectcontactustitle: function(){
        return selectcontactustitle.with({boundTestRun:testController})
    },
    contactusfirstname: function(){
        return contactusfirstname.with({boundTestRun:testController})
    },
    contactuslastname: function(){
        return contactuslastname.with({boundTestRun:testController})
    },
    selectcontactuscountry: function(){
        return selectcontactuscountry.with({boundTestRun:testController})
    },
    contactuspostalcode: function(){
         return contactuspostalcode.with({boundTestRun:testController})
    },
    selectcontactusstate: function(){
        return selectcontactusstate.with({boundTestRun:testController})
    },
    messagecontactus: function(){
        return messagecontactus .with({boundTestRun:testController})
    },
    contactnumberconstactus: function(){
        return contactnumberconstactus.with({boundTestRun:testController})
    },
    emailcontactus: function() {
        return emailcontactus.with({boundTestRun:testController})
    },
    submitenquiry: function(){
        return submitenquiry.with({boundTestRun:testController})
    },

    //************Request Quote Elements */

    requestquote: function(){
        return requestquote.with({boundTestRun:testController})
    },

    requestquotemonth: function(){
         return requestquotemonth.with({boundTestRun:testController})
     },
    requestquoteyear: function(){
        return requestquoteyear.with({boundTestRun:testController})
    },
    requestquotetitle: function(){
        return requestquotetitle.with({boundTestRun:testController})

    },
    requestquotefirstname: function(){
        return requestquotefirstname.with({boundTestRun:testController})
    }, 

    requestquotelastname: function(){
        return requestquotelastname.with({boundTestRun:testController})
    },
    requestquotecountry: function(){
        return requestquotecountry.with({boundTestRun:testController})

    },
    requestquoteselectradio: function(){
        return requestquoteselectradio.with({boundTestRun:testController})
    },
    requestquotephonenumber: function(){
        return requestquotephonenumber.with({boundTestRun:testController})
    },
    requestquotephonenumberalt: function(){
        return requestquotephonenumberalt.with({boundTestRun:testController})
    },
    requestquotetimetocall:function(){
        return requestquotetimetocall.with({boundTestRun:testController})
    },
    requestquoteemail: function(){
        return requestquoteemail.with({boundTestRun:testController})
    },
    requestquoteemailcnf: function(){
        return requestquoteemailcnf.with({boundTestRun:testController})
    },
    requestquotemessage:function(){
        return requestquotemessage.with({boundTestRun:testController})
    },
    requestquotenewsletteropt: function(){
        return requestquotenewsletteropt.with({boundTestRun:testController})
    },
    requestquotesubmit: function(){
        return requestquotesubmit.with({boundTestRun:testController})
    },
    requestquotealttitle: function(){
        return requestquotealttitle.with({boundTestRun:testController})
    },

    //*******enquiry now elements function */

    enquiryprice: function(){
        return enquiryprice.with({boundTestRun:testController})
    },
    clickenquiryprice: function(){
        return clickenquiryprice.with({boundTestRun:testController})
    },
    clickenquirycabin: function(){
        return clickenquirycabin.with({boundTestRun:testController})
    },
    enquirycontinuebutton: function(){
        return enquirycontinuebutton.with({boundTestRun:testController})
    },
    enquirybutton : function(){
        return enquirybutton.with({boundTestRun:testController})
    },
    enquirytitle: function(){
        return enquirytitle.with({boundTestRun:testController})
    }, 
    enquiryfirstname: function(){
        return enquiryfirstname.with({boundTestRun:testController})
    },
    enquirylastname: function(){
        return enquirylastname.with({boundTestRun:testController})
    },
    enquiryemailid: function(){
        return enquiryemailid.with({boundTestRun:testController})
    },
    enquiryphonenumber: function(){
        return enquiryphonenumber.with({boundTestRun:testController})
    },
    enquirytimetocall: function(){
        return enquirytimetocall.with({boundTestRun:testController})
    },
    enquirycountry: function(){
    return enquirycountry.with({boundTestRun:testController})
    },
    enquirypostalcode: function(){
        return enquirypostalcode.with({boundTestRun:testController}) 
    },
    enquirynewsletter: function(){
       return enquirynewsletter.with({boundTestRun:testController})
    },
    enquirybuttonconf: function(){
        return enquirybuttonconf.with({boundTestRun:testController})
    },
    enquiryconfirmation: function(){
        return enquiryconfirmation.with({boundTestRun:testController})
    },


    //////////*******************BOOOOKING PAGE ELEMENT************************** */
    booknow : function(){
        return booknow.with({boundTestRun:testController})
    },
    form1selecttitle: function()
    {
        return form1selecttitle.with({boundTestRun:testController})
    },
    form1firstname : function()
    {
        return form1firstname.with({boundTestRun:testController})
    },
    form1lastname: function()
    {
        return form1lastname.with({boundTestRun:testController})
    },
    form1gender: function()
    {
        return form1gender.with({boundTestRun:testController})
    },
    form1country: function()
    {
        return form1country.with({boundTestRun:testController})
    },
    form1state: function()
    {
        return form1state.with({boundTestRun:testController})
    },
    form1address: function()
    {
        return form1address.with({boundTestRun:testController})
    },
    form1zip: function()
    {
        return form1zip.with({boundTestRun:testController})
    },
    form1subcity: function()
    {
        return form1subcity.with({boundTestRun:testController})
    },
    form1email: function()
    {
        return form1email.with({boundTestRun:testController})
    },
    form1contactno: function()
    {
        return form1contactno.with({boundTestRun:testController})
    },
    form1contactmethod: function()
    {
        return form1contactmethod.with({boundTestRun:testController})
    },
    form1passportclick: function()
    {
        return form1passportclick.with({boundTestRun:testController})
    },
    form1passportno: function()
    {
        return form1passportno.with({boundTestRun:testController})
    },
    form1countryname: function()
    {
        return form1countryname.with({boundTestRun:testController})
    },
    form1dob: function()
    {
        return form1dob.with({boundTestRun:testController})
    },
    form1diet: function()
    {
        return form1diet.with({boundTestRun:testController})
    },
    form1health: function()
    {
        return form1health.with({boundTestRun:testController})
    },
    form2selecttitle: function()
    {
        return form2selecttitle.with({boundTestRun:testController})
    },
    form2firstname: function()
    {
        return form2firstname.with({boundTestRun:testController})
    },
    form2lastname: function()
    {
        return form2lastname.with({boundTestRun:testController})
    },
    form2selectgender: function()
    {
        return form2selectgender.with({boundTestRun:testController})
    },
    formbuttoncontinue: function()
    {
        return formbuttoncontinue.with({boundTestRun:testController})
    },
    continuepaymentbtn: function()
    {
        return continuepaymentbtn.with({boundTestRun:testController})
    },
    payeename: function()
    {
        return payeename.with({boundTestRun:testController})
    },
    payeecardnum: function()
    {
        return payeecardnum.with({boundTestRun:testController})
    },
    Payeeexpirycardno: function(){
        return Payeeexpirycardno.with({boundTestRun:testController})
    },
    payeecvvno: function(){
        return payeecvvno.with({boundTestRun:testController})
    },
    accepttermsandcondition: function(){
        return accepttermsandcondition.with({boundTestRun:testController})

    },
    paymentconf: function()
    {
        return paymentconf.with({boundTestRun:testController})
    },
    bookingconf: function()
    {
    return bookingconf.with({boundTestRun:testController})
    }
};
