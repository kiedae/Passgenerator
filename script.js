// Assignment Code
var generateBtn = document.querySelector("#generate");

// Recommend making variables for characters an array of strings as this is easier to manage!
var numberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

function promptUser() {
  var passwordLength = parseInt(prompt('How many characters would you like your password length to contain?'));
    
  if (parseInt == isNaN) {
    alert('Password length must be a number.');
    return null;
}

  if (passwordLength < 8) {
    alert('Password length needs to be at least 8 characters in length');
    return null;
  }

  if (passwordLength > 128) {
    alert('Password length cannot exceed 128 characters in length.');
    return null;
}
 


  var hasNumbers = confirm('Click OK to confirm you would like your password to include numbers!');

  var hasUppercase = confirm('Click OK to confirm you would like your password to include uppercase letters.');
  
  var hasLowercase = confirm('Click ok if you would like your password to include lowercase letters.');
  
  var hasSpecial = confirm('Click OK to confirm you would like to have your password include special characters.');
  

  
  console.log(passwordLength);
  console.log(hasNumbers);
  console.log(hasUppercase);
  console.log(hasLowercase);
  console.log(hasSpecial);
}

function generatePassword () {
  var options = promptUser();
  console.log(options)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);