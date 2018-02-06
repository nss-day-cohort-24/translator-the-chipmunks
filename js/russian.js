"use strict";

// console.log("hi")
var translateText = (function(russian) {
    var russianWords = {"merry": "весёлого",
                      "christmas": "рождества", 
                      "and": "и", 
                      "happy": "счастливого", 
                      "new": "нового", 
                      "year": "года" };
              


       russian.translateToRussian = function (input) {
        return russianWords[input]; 
       };
	

	return russian;


});
console.log(translateText);
