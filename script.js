var generateBtn = document.querySelector("#generate");
// arrays for all char types
var numberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

function promptUser() {
  // promps user to input password length
  var passwordLength = parseInt(prompt('How many characters would you like your password length to contain?'));
  // if not a number cancels the next user prompts
  if (isNaN(passwordLength)) {
    alert('Password length must be a number.');
    return null;
  }
  // if not valid password length cancels the next user promts
  if (passwordLength < 8) {
    alert('Password length needs to be at least 8 characters in length');
    return null;
  }
  if (passwordLength > 128) {
    alert('Password length cannot exceed 128 characters in length.');
    return null;
  }
// prompting users for included password types
  var hasNumbers = confirm('Click OK to confirm you would like your password to include numbers!');
  var hasUppercase = confirm('Click OK to confirm you would like your password to include uppercase letters.');
  var hasLowercase = confirm('Click OK if you would like your password to include lowercase letters.');
  var hasSpecial = confirm('Click OK to confirm you would like to have your password include special characters.');
// if atleast one char type isnt included, prevents the code from going further
  if (!hasLowercase && !hasUppercase && !hasSpecial && !hasNumbers) {
    alert("Please try again, you must include at least one character type");
    return null;
  }
  // compacts the user's choices into an object
  var options = {
    passwordLength: passwordLength,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasSpecial: hasSpecial
  };

  return options;
}

function generatePassword() {
  var options = promptUser();
  //  creates an array to store all the slected chars
  var selectedCharacters = [];
// compacts all chosen characters into one array
  if (options.hasLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
  }
  if (options.hasUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
  }
  if (options.hasSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
  if (options.hasNumbers) {
    selectedCharacters = selectedCharacters.concat(numberCharacters);
  }
// creates the password
  var password = "";
  // loop to choose random chars from user's chosen char types
  for (var i = 0; i < options.passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    // adds the random character into the password variable
    password += selectedCharacters[randomIndex];
  }
  // stores the password once loop is done
return password;
}

 
function writePassword() {
  // calls the function to generate the password
  var password = generatePassword();
  // prints the password to the password box in html
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// listens to see when the user clicks the generate button to run all the code before this
generateBtn.addEventListener("click", writePassword);