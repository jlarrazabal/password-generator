var requestPassword = document.getElementById("generate");
var specialCharacters = ["!", "$", "%", "&", "*", "+", "-", "/", "<", ">", "?", "@", "{", "}", "~"];
var lowercaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var uppercaseLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var newPassword = [];

var createPassword = function generatePassword() {

  var numberOfCharacters = prompt("Specify the number of characters for your password (8 to 128)");
  var wantSpecialCharacters = confirm("Do you want special characters in your password?");
  var wantUppercase = confirm("Do you want uppercase letters in your password");
  var wantNumbers = confirm("Do you want numbers in your password");

  newPassword = [];

  if (wantSpecialCharacters === true) {
    wantSpecialCharacters = 1;
  } else {
    wantSpecialCharacters = 0;
  }

  if (wantUppercase === true) {
    wantUppercase = 1;
  } else {
    wantUppercase = 0;
  }

  if (wantNumbers === true) {
    wantNumbers = 1;
  } else {
    wantNumbers = 0;
  }

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {

    alert("Your password needs to be between 8 and 128 characters in length, please try again!");

  } else if (wantSpecialCharacters === 0 && wantUppercase === 0 && wantNumbers === 0) {

    for (var i = 0; i < numberOfCharacters; i++) {
      let ramdomLowercase = Math.floor(Math.random() * 27);
      let lowerCasePasswordCharacter = lowercaseLetters[ramdomLowercase];
      newPassword.push(lowerCasePasswordCharacter);
    }
    displayPassword = newPassword.join("");
    console.log(displayPassword);

  } else if (wantSpecialCharacters === 1 && wantUppercase === 0 && wantNumbers === 0) {

    for (var i = 0; i < numberOfCharacters; i++) {
      let ramdomPush = [];
      let ramdomLowercase = Math.floor(Math.random() * 27);
      let ramdomSpecialCharacter = Math.floor(Math.random() * 16);
      let lowerCasePasswordCharacter = lowercaseLetters[ramdomLowercase];
      let specialPasswordCharacter = specialCharacters[ramdomSpecialCharacter];
      ramdomPush.push(lowerCasePasswordCharacter);
      ramdomPush.push(specialPasswordCharacter);
      newPassword.push(ramdomPush[Math.floor(Math.random() * 2)]);
    }
    displayPassword = newPassword.join("");
    console.log(displayPassword);

  } else if (wantSpecialCharacters === 1 && wantUppercase === 1 && wantNumbers === 0) {

    for (var i = 0; i < numberOfCharacters; i++) {
      let ramdomPush = [];
      let ramdomCase = Math.floor(Math.random() * 27);
      let ramdomSpecialCharacter = Math.floor(Math.random() * 16);
      let lowerCasePasswordCharacter = lowercaseLetters[ramdomCase];
      let specialPasswordCharacter = specialCharacters[ramdomSpecialCharacter];
      let upperCasePasswordCharacter = uppercaseLetters[ramdomCase];
      ramdomPush.push(lowerCasePasswordCharacter);
      ramdomPush.push(specialPasswordCharacter);
      ramdomPush.push(upperCasePasswordCharacter);
      newPassword.push(ramdomPush[Math.floor(Math.random() * 3)]);
    }
    displayPassword = newPassword.join("");
    console.log(displayPassword);

  } else if (wantSpecialCharacters === 1 && wantUppercase === 1 && wantNumbers === 1) {

    for (var i = 0; i < numberOfCharacters; i++) {
      let ramdomPush = [];
      let ramdomCase = Math.floor(Math.random() * 27);
      let ramdomSpecialCharacter = Math.floor(Math.random() * 16);
      let ramdomNumber = Math.floor(Math.random() * 10);
      let lowerCasePasswordCharacter = lowercaseLetters[ramdomCase];
      let specialPasswordCharacter = specialCharacters[ramdomSpecialCharacter];
      let upperCasePasswordCharacter = uppercaseLetters[ramdomCase];
      ramdomPush.push(lowerCasePasswordCharacter);
      ramdomPush.push(specialPasswordCharacter);
      ramdomPush.push(upperCasePasswordCharacter);
      ramdomPush.push(ramdomNumber);
      newPassword.push(ramdomPush[Math.floor(Math.random() * 4)]);
    }
    displayPassword = newPassword.join("");
    console.log(displayPassword);

  }

}

requestPassword.addEventListener("click", createPassword);
