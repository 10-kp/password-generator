// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Need to capture lowercase, uppercase, numeric, and/or special characters 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}

// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];

//   generate length
var pLength = Prompt ("Your password should be at leat 8 characters and max 128 characters")
    
    if(pLength < 8 || pLength > 128){
        alert("Lenght must be 8-128 characters")
    }
    if (pLength >= 8 && plength <= 128){
        var uppercase = confirm("Would you like to use uppercase letters?")
        var lowercase = confirm("Would you like to use lowercase letters?")
        var numbers = confirm("would you like to use numbers?")
        var symbols = confirm("would you like to use special characters?")
        }    
    if (uppercase != true && lowercase != true && numbers != true && symbols != true){
         alert("You must select at least one character type!")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

