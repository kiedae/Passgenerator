// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowcase = "abcdefghijklmnoprstuvwxyz"
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numercl = "1234567890"




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function confirm() {
  return confirm("Would you like to include lowercase letters?");

}