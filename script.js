//function to generate password
function generatePassword(){

  //keep values between 8 and 120
  var isValid = false;

//set prompt to only accept values between 8 and 120
  do {
    var userLength = prompt("*Enter a number between 8 and 120");
    userLength = parseInt(userLength);
//length of pw
    if ((userLength < 8) || (userLength > 120) || (isNaN(userLength))){
      alert("Please enter a valid number between 8 and 120.");
    } else{
      isValid = true;
    }
  }
  while (!isValid);
// array of the characters
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "K", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var specCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
    "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_",
    "`", "{", "|", "}", "~"];

//value of is valid to false measure to make user choose one character type
    isValid = false;
    

    

    do {
        //confirm for the 
      var alphaLowConfirm = confirm("Do you want lowercase letters in your password?");
      var alphaUpperConfirm = confirm("Do you want uppercase letters n your password?");
      var numbersConfirm = confirm("Do you want numbers in your password?");
      var specCharConfirm = confirm("Do you want special characters in your password?");


        if ((alphaLowConfirm == false) && (alphaUpperConfirm == false) && (numbersConfirm == false) && (specCharConfirm == false)) {
          alert ("Please select at least one type of character to use.");
        }else {
          isValid = true;
        }
    }while (!isValid);

    var passArray = [];

    if(alphaLowConfirm == true) {
      for (var i of alphabet)
          passArray.push(i);
    }
    if (alphaUpperConfirm == true) {
      for (var i of alphabet) {
        passArray.push(i,toUppercase());
      }
    }
      if (numbersConfirm == true) {
        for (var i of numbers)
        passArray.push(i);
      }
      if (specCharConfirm == true) {
        for (var i of specCharacters)
        passArray.push(i);
      }

      var returnPass = "";

      for (var i = 0; i < userLength; i++) {
        returnPass += passArray[Math.floor(Math.random() * passArray.length)];
      } 

        //Creat return value that is generate password()
      return returnPass;
    }

generateBtn.addEventListener("click", writePassword);