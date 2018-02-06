"use strict";

var inputText = document.getElementById("text-to-translate");
var button = document.getElementById("btn-translate");
button.addEventListener("click", clickButton); 
var Spanish = document.getElementById("Spanish").selected;	
var Italian = document.getElementById("Italian").selected;	
var Russian = document.getElementById("Russian").selected;
var Norwegian = document.getElementById("Norwegian").selected;	

function clickButton (){
	var text = inputText.value.toLowerCase();
	var textArray = phraseToArray(text);
	var spanishText = [];
	var italianText = [];
    var russianText = [];
	var norwegianText = [];
	
	if (Spanish === true) {
		return document.getElementById("translated-text").innerHTML = finalSpanish;
	}

	for (var i = 0; i < textArray.length; i++) {
		 spanishText.push(translateText.translateToSpanish(textArray[i]));
		 italianText.push(translateText.translateToItalian(textArray[i]));
         russianText.push(translateText.translateToRussian(textArray[i]));
         norwegianText.push(translateText.translateToNorwegian(textArray[i]));
	}
var finalSpanish = arrayToPhrase(spanishText);
var finalItalian = arrayToPhrase(italianText);
var finalRussian = arrayToPhrase(russianText);
var finalNorwegian = arrayToPhrase(norwegianText);

document.getElementById("translated-text").innerHTML = finalSpanish;
document.getElementById("translated-text").finalItalian.innerHTML;
document.getElementById("translated-text").finalRussian.innerHTML;
document.getElementById("translated-text").finalNorwegian.innerHTML;
}



var translateText = (function() {

	return {};

})();

var phraseToArray = function(inputstring) {
	
	var inputArray = inputstring.split(" ");
	return inputArray;

};


var arrayToPhrase = function(tranlatedArray) {

	var translatedPhrase = tranlatedArray.join(" ");

	return translatedPhrase;

};

