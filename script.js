// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of strings for characters to include
var numberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

 

// prompt user to select password length, and what characters to include
function promptUser() {
  var passwordLength = parseInt(prompt('How many characters would you like your password length to contain?'));
  
// is length is not a number return null,
  if (isNaN(passwordLength)) {
    alert('Password length must be a number.');
    return null;
  }
// password length must be greater than 8
  if (passwordLength < 8) {
    alert('Password length needs to be at least 8 characters in length');
    return null;
  }
 // length must be less than 128
  if (passwordLength > 128) {
    alert('Password length cannot exceed 128 characters in length.');
    return null;
}

 

// asks the user to include or not include strings
function options() { }

  var hasNumbers = confirm('Click OK to confirm you would like your password to include numbers!');

  var hasUppercase = confirm('Click OK to confirm you would like your password to include uppercase letters.');
  
  var hasLowercase = confirm('Click ok if you would like your password to include lowercase letters.');
  
  var hasSpecial = confirm('Click OK to confirm you would like to have your password include special characters.');
  


  
 console.log(passwordLength);
  console.log(hasNumbers);
  console.log(hasUppercase);
  console.log(hasLowercase);
  console.log(hasSpecial);
  
  var options = {
    passwordLength: passwordLength,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasSpecial: hasSpecial
  };

}



function generatePassword () {
  var options = promptUser();
  console.log(options)
  // Creates an empty string until for loop randomizes the characters and feeds it into the string
  var password = '';
  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * max);
    password += options[randomIndex];
  }
  }
 
  





// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);