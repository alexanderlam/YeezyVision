/**
 * Returns Key Phrases using Azure Machine Learning
 * @param {string} text     text to analyze for key phrases
 * @param {function} callback function to receive response
 */
function getKeyPhrases(text, callback) {

    var encodedText = encodeURIComponent(text);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.datamarket.azure.com/data.ashx/amla/text-analytics/v1/GetKeyPhrases?text=" + encodedText,
        "method": "GET",
        "headers": {
            "authorization": "Basic QWNjb3VudEtleTpmeU81d0JnN1JGdXNFQTB6Q0hCUkhOcGNnVU9tT0xHVXZQdjFRYSs5ZUdv",
            "accept": "application/json",
        }
    }

    $.ajax(settings).done(function (response) {
        if (callback && typeof (callback) === "function") {
            callback(response);
        }
    });

}

/**
 * Returns text with keyPhrase replaced
 * @param   {string}   bodyText  text to alter
 * @param   {string} keyPhrase key phrase in text
 * @returns {string} alterted body text
 */
function replaceText(bodyText, keyPhrase) {
    var min = 0;
    var max = 4;
    var yeezyNouns = ["Yeezy", "Kanye", "Yeezus", "Ye", "Mr. West"];
    var randYeezy = yeezyNouns[Math.floor(Math.random() * (max - min + 1)) + min];
    return bodyText.replace(keyPhrase, randYeezy);
}

/**
 * replaces all key phrases with appropriate Yeezy noun
 * @param {string} text     text ot be altered
 * @param {function} callback function to be executed with result after
 */
function replaceKeyPhrases(text, callback) {
        getKeyPhrases(text, function (response) {
                    var newText = text;
                    /*var responseArray = [];
                    for (var x in response) {
                        responseArray.push(response[x]);
                    }*/
                    var responseArray = $.map(response, function(el) { return el });
                    for (var i = 0; i < responseArray.length; i++) {
                        newText = replaceText(newText, responseArray[i]);
                    }
           if (callback && typeof (callback) === "function") {
            callback(newText);
        }         
        });
    
}

/**
 * Returns random Yeezy quote in callback
 * @param {function} callback whatever you wanna do with the callback
 */
function getQuote (callback){
    var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://yepi.io/api/quote",
  "method": "GET",
}

$.ajax(settings).done(function (response) {
 if (callback && typeof (callback) === "function") {
            callback(response);
        }});   
}