// Assignment code here

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]


var diffCharacters = [];
numberOfChar = "";

function generatePassword () {
  var numberOfChar  = prompt("How many characters do you want in your password?");

  if (numberOfChar < 8 || numberOfChar >= 128) {
    prompt("Choose a correct amount of characters!"); 
  } else {
    confirm(`Your password will have ${numberOfChar} characters.`);
  }



  var confirmSpecial = confirm("Do you want your password to have special characters?");
  if (confirmSpecial) {
    confirm("Your password will have special characters.")
  } 
  var confirmNumbers = confirm("Do you want your password to numbers?");
  if (confirmNumbers) {
    confirm("Your password will have numbers in it")
  }
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  if (confirmUpperCase) {
    confirm("Your password will have uppercase letters in it.")
  }
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  if (confirmLowerCase) {
    confirm("Your password will have lowercase letters in it.")
  }


}

  
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
