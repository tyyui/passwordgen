// Assignment Code
var generateBtn = document.querySelector("#generate");


//Variable for all characters that will be used to generate a password.
var num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// This function prompt user for possible options with at least one type of requirement.
function getOptionForPassword(){
  var isValid = false;
  do {
  var length = prompt ("How many characters would you like your password to have from 8 and 128?");
  var hasSpecialChar = confirm ("Would you like special character in your password?")
  var hasnumber = confirm ("Do you want a number in your Password?")
  var hasUpperCase = confirm ("Do you want uppercase letters in your password?")
  var hasLowerCase = confirm ("Do you want lowercase letters in your password?")
  var PasswordResponses = {
    length:length,
    hasnumber:hasnumber,
    hasUpperCase:hasUpperCase,
    haslowerCase:haslowerCase,
    hasSpecialChar:hasSpecialChar,  
  }
  if((length < 8 ) || (length > 128))
  alert("Can you please pick a number that is between 8 and 128?");
  else if((!hasSpecialChar) && (!hasnumber) && (!hasUpperCase) && (!haslowerCase))
  alert("Please choose one character type!");
  else
  isValid = true;

  }while(!isValid)
  return PasswordResponses;
}

// Function combines all results from user and generate a desired password
function generatePassword(){
  var useroption = getOptionForPassword();
  var potentialPassword = [];
  var Password = "";

  if (useroption.hasnumber) {
    for (var i of num)
    potentialPassword.push(i);
  }
  if (useroption.hasUpperCase) {
    for (var i of upperCase)
    potentialPassword.push(i);
  }
  if (useroption.haslowerCase) {
    for (var i of lowerCase)
    potentialPassword.push(i);
  }
  if (useroption.hasSpecialChar) {
    for (var i of specialChar)
    potentialPassword.push(i);
  }

  console.log(potentialPassword);


for(var i = 0; i < useroption.length; i++){
  Password += potentialPassword[Math.floor(Math.random()*potentialPassword.length)];
}
console.log(Password);

return Password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);