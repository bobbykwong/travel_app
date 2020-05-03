/************************
========================
Get Country flags from api
========================
************************/

// Add flag link to all the background of trips div

// what to do when we recieve the request
var responseHandler = function() {
  const countryDetails = JSON.parse(this.responseText)[0];
  console.log(countryDetails.flag);


};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "https://restcountries.eu/rest/v2/name/china";
request.open("GET", url);

// send the request
request.send();