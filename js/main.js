var inputText = document.getElementById("text-to-translate");
var button = document.getElementById("btn-translate");
button.addEventListener("click", clickButton); 
var Spanish = document.getElementById("Spanish")	
var Italian = document.getElementById("Italian")	
var Russian = document.getElementById("Russian")
var Norwegian = document.getElementById("Norwegian")	

function clickButton (){
	var text = inputText.value.toLowerCase();
	var textArray = phraseToArray(text);
	var SpanishText = []; 
	var ItalianText = [];
    var RussianText = [];
    var NorwegianText = [];
	for (var i = 0; i < textArray.length; i++) {
		 spanishText.push(translateText.translateToSpanish(textArray[i]));
		 italianText.push(translateText.translateToItalian(textArray[i]));
         RussianText.push(translateText.translateToRussian(textArray[i]));
         NorwegianText.push(translateText.translateToNorwegian(textArray[i]));
	}
var finalSpanish = arrayToPhrase(spanishText);
var finalItalian = arrayToPhrase(italianText);
var finalRussian = arrayToPhrase(russianText);
var finalNorwegian = arrayToPhrase(norwegianText);
Spanish.innerHTML = finalSpanish;
Italian.innerHTML = finalItalian;
Russian.innerHTML = finalRussian;
Norwegian.innerHTML = finalNorwegian;
};

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

