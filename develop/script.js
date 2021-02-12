// Assignment Code

document.querySelector("#generate").addEventListener("click", writePassword);


//Create variables of lowercase, uppercase, numbers and symbols
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Declare Variables 
var charLength = "";
var lowerCaseChar;
var upperCaseChar;
var numbersChar;
var specialChar;


// Prompt for number of characters for the user
//HOW TO PUT FIGURES IN THE CHARACTER - LIKE IN Python, YOU COULD USE f-statement
function generatePassword() {
    var charLength = (prompt("How many characters in your password?"));
  
    // Create a loop for length of password
    //ISSUE 1 - THE PASSWORD GOES ON DESPITE RESTRICTING.
    //ISSUE 2 - PROMPTS THE SAME ALERT TWICE
        if (charLength < 8 || charLength >= 128) {
            alert("Please choose a length between 8-128 characters");
        } else {
            var charLength = (prompt("How many characters in your password?"));
        }    
        
  
      // Password Parameters
      var lowerCaseChar = confirm("Click Ok to include lowercase letters");
      var upperCaseChar = confirm("Click Ok to include uppercase letters");
      var numbersChar = confirm("Click Ok to include numbers");    
      var specialChar = confirm("Click Ok to include special characters");
      
//THIS IS STATEMENT IS NOT WORKING
        if (lowerCaseChar === false && upperCaseChar  === false &&  numbersChar === false && specialChar === false) {
          alert("You must choose at least one parameter");
          var lowerCaseChar = confirm("Click Ok to include lowercase letters");
          var upperCaseChar = confirm("Click Ok to include uppercase letters");   
          var numbersChar = confirm("Click Ok to include numbers");
          var specialChar = confirm("Click Ok to include special characters");
        } else{
        prompt("Something went wrong. Try again")
    }
  
        // Combine all the characters
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
        //THIS DOES NOT SEEM TO WORK
        } else{
            alert("Something went wrong. Try again")
        }

    
        console.log(passwordCharacters)
  
        // Fill empty string from selecting characters
        var randomPassword = ""
        
        for (var i = 0; i < charLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword)
        }
        return randomPassword;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }



//HOW IS THIS LINKED TO THE CODE?
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

// Add event listener to generate button???????????
generateBtn.addEventListener("click", writePassword);

