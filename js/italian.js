"use strict"

var italianLex = {"merry":"buon", "christmas":"natale", "and":"e", "a":"un", "happy":"felice", "new":"anno" , "year":"nuovo"}


function translateToItalian(object) { 
    for (var prop in object) {
     return object[prop];
    }
} 
translateToItalian(italianLex);

