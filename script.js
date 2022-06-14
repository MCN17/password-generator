// Assignment code here

var numbers = ["123456789"];
var upperCase = ["abcdefghijklmnopqrstuv"];
var lowerCase = ["ABCDEFGHIJKLMNOPQRSTUV"]
var specialChar = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

function generatePassword () {
  var numberOfChar  = prompt("How many characters do you want in your password?");

  if (numberOfChar < 8 || numberOfChar >= 128) {
    prompt("Choose a correct amount of characters!"); 
  } else {
    prompt(`Your password will have ${numberOfChar} characters.`);
  }

  var specialChar = confirm("Do you want your password to have special characters?");
  var numbers = confirm("Do you want your password to numbers?");
  var upperCase = confirm("Do you want uppercase characters in your password?");
  var lowerCase = confirm("Do you want lowercase characters in your password?");

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
