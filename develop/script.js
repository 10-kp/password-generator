// Assignment Code

document.querySelector("#generate").addEventListener("click", writePassword);


//Create variables of lowercase, uppercase, numbers and symbols
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];



// Prompt for number of characters for the user
function generatePassword() {
    var charLength = (prompt("Please choose a length between 8-128 characters?"));
    
        if (JSON.parse (charLength) > 8 && JSON.parse(charLength) <= 128) {
            var lowerCaseChar = confirm("Click Ok to include lowercase letters");
            var upperCaseChar = confirm("Click Ok to include uppercase letters");
            var numbersChar = confirm("Click Ok to include numbers");    
            var specialChar = confirm("Click Ok to include special characters");
        if (lowerCaseChar === false && upperCaseChar  === false &&  numbersChar === false && specialChar === false) {
                alert("You must choose at least one parameter");
                return generatePassword();
            } 
  
            var passwordCharacters = []
                if (lowerCaseChar) {
                passwordCharacters = passwordCharacters.concat(lowerCase)
            }
          
              if (upperCaseChar) {
                passwordCharacters = passwordCharacters.concat(upperCase)
            }  
              if (numbersChar) {
                passwordCharacters = passwordCharacters.concat(numbers)
            }
              if (specialChar) {
                passwordCharacters = passwordCharacters.concat(specialChar)
            } 
    
            console.log(passwordCharacters)
      
            var randomPass = ""
            
            for (var i = 0; i < charLength; i++) {
              randomPass = randomPass + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
              console.log(randomPass)
            }
            console.log(randomPass);
            return randomPass;

        } else {
            alert("You must choose a number between 8 and 128.");
                return generatePassword();
        }
    }
 
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

