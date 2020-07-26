var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialsCharacters = "`~!@#$%^&*()_-+={[]}|:;\'<,>.?/";
var numberCharacters = "0123456789";

var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialArray = "`~!@#$%^&*()_-+={[]}|:;\'<,>.?/".split(""); 
var numberArray = "0123456789".split("");

var userConfirmNumber = false;
var userConfirmUpper = false;
var userConfirmLower = false;
var userConfirmSpecial = false;
var userPasswordLength = 0;

var minLen = 8;
var maxLen = 128;
var _password = "";

userPasswordLength = prompt("Enter the length of your password");
while (userPasswordLength < minLen) {
  alert("Length of password has to be greater than 7");
  userPasswordLength = prompt("Enter the length of your password");
if (userPasswordLength > maxLen)
  alert("Length of password has to be lass than 129");
} 

userConfirmNumber = confirm("Do you want numbers in your password?");
userConfirmUpper = confirm("Do you want uppercase letters?");
userConfirmLower = confirm("Do you want lowercase letters?");
userConfirmSpecial = confirm("Do you want special characters?");

function passwordLogicMath() {
if (userConfirmNumber) {
  var index = Math.floor(Math.random() * numberArray.length);
  _password += numberArray[index];
}
console.log(_password);

if (userConfirmUpper) {
  var index = Math.floor(Math.random() *ray.length);
  _password +=ray[index];
}
console.log(_password);

if (userConfirmLower) {
  var index = Math.floor(Math.random() * ay.length);
  _password += ay[index];
}
console.log(_password);

if (userConfirmSpecial) {
  var index = Math.floor(Math.random() * specialArray.length);
  _password += specialArray[index];
}
}

function generatePassword() {
  var remaining = userPasswordLength - _password.length;
  var allStrings = "";

  if (userConfirmNumber) {
    allStrings += numberCharacters;
  }
  if (userConfirmUpper) {
    allStrings += upperCaseCharacters;
  }
  if (userConfirmLower) {
    allStrings += lowerCaseCharacters;
  }
  if (userConfirmSpecial) {
    allStrings += specialsCharacters;
  }
  console.log(allStrings);

  for (var i = 0; i < remaining; i++) {
    var index = Math.floor(Math.random() * allStrings.length);
    _password += allStrings[index]; 
  }

  console.log("Final password", _password);
  return _password;
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);