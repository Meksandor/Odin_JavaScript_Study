function add7(num) {
var num;
return num+7;
}

function multiply(num1, num2) {
var num1;
var num2;
return num1 * num2;
}

// This function capitalize thw word no matter how the word It is.
function capitalize(word) {
var word 
var word2= word.toLowerCase();
var firstChar = word2.charAt(0);
var firstCharUpper = firstChar.toUpperCase(); 
var firstCharUpperReplace = word2.replace(firstChar, firstCharUpper);
return firstCharUpperReplace;
}

function lastLetter(word) {
var word;
return word.charAt(word.length - 1);
}