// Assignment Code
// generateBtn is grabbing the button labeled generate in html
var generateBtn = document.querySelector("#generate");
var userLength = 

// Write password to the #password input
//we're making a function called writePassword() 
function writePassword() {

  // variable password is equal to 
  var password = generatePassword();
  
  // variable passwordText is grabbing the card body in html where the password text is diaplayed
  // so when I use passwordTExt, it will reference that area 
  var passwordText = document.querySelector("#password");

  // passwordText variable now has a value of variable 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function generatePassword() {
      var userLength = prompt("how long 8 to 128")
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        var result = characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  })

  //   var userLength = prompt("Please select your password length from 8-128");
//   var length = userLength.value
//   console.log=userLength
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!()*+,-./:;<>=?@^_{}|~`",
//       retVal = "";
//   for (var i = 0, n = userLength.value; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// })
  // writePassword;

  // function makeid(length) {
    



// on button click, 
  // prompt appears with user selecting length of password 8-128 characters (if not in that range, give error message saying try again)
  // confirm appears with "I would like upper case"
  // confirm appears with "I would like lower case"
  // confirm appears with "I would like numerals case"
  // confirm appears with "I would like special characters"
    // a selection has to be made of one of the above 4 character types or tells you to try again


// function generatePassword() {