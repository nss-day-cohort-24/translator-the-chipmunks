"use strict";

var translateText = (function(origTranslateText) {
	var norwegianWords = {"merry": "god", "christmas": "jul", "and": "og", "happy": "lykkelig", "new": "ny", "year": "år"};


	origTranslateText.translateToNorwegian = function(englishWord) {
		return norwegianWords[englishWord];
	};

	return origTranslateText;


})(translateText);