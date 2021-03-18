//Global Variables
var requestPassword = document.getElementById("generate");
var specialCharacters = ["!", "$", "%", "&", "*", "+", "-", "<", ">", "@", "{", "}", "~"];
var lowercaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var uppercaseLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

//Function to create a random collection of lowercase letters, uppercase letters, special characters, and numbers.
var random = function() {
  let randomCharacters = [];
  let randomCase = Math.floor(Math.random() * 27);
  let randomSpecialCharacter = Math.floor(Math.random() * 14);
  let randomNumber = Math.floor(Math.random() * 10);
  let lowerCasePasswordCharacter = lowercaseLetters[randomCase];
  let specialPasswordCharacter = specialCharacters[randomSpecialCharacter];
  let upperCasePasswordCharacter = uppercaseLetters[randomCase];
  randomCharacters.push(lowerCasePasswordCharacter);
  randomCharacters.push(specialPasswordCharacter);
  randomCharacters.push(upperCasePasswordCharacter);
  randomCharacters.push(randomNumber);
  return randomCharacters;
}

//The function that creates the password for the user. It evaluates the user's password requirements and returns the suggested password that meets the criteria provided.
var createPassword = function() {
  var newPassword = [];
  var numberOfCharacters = parseInt(prompt("Specify the number of characters for your password (8 to 128)"));
  var wantSpecialCharacters = confirm("Do you want special characters in your password?");
  var wantUppercase = confirm("Do you want uppercase letters in your password?");
  var wantNumbers = confirm("Do you want numbers in your password?");

  if (wantSpecialCharacters === true) {
    wantSpecialCharacters = 1;
  } else {
    wantSpecialCharacters = 0
  }

  if (wantUppercase === true) {
    wantUppercase = 1;
  } else {
    wantUppercase = 0
  }

  if (wantNumbers === true) {
    wantNumbers = 1;
  } else {
    wantNumbers = 0
  }

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Your request cannot be processed. The number of characters for your password must be between 8 and 128. Please try again.");
  } else if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    var randomValues = random();
    if (wantSpecialCharacters === 0 && wantUppercase === 0 && wantNumbers === 0) {
      newPassword.push(randomValues[0]);
    } else if (wantSpecialCharacters === 1 && wantUppercase === 0 && wantNumbers === 0) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
    } else if (wantSpecialCharacters === 0 && wantUppercase === 1 && wantNumbers === 0) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[2]);
    } else if (wantSpecialCharacters === 0 && wantUppercase === 0 && wantNumbers === 1) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[3]);
    } else if (wantSpecialCharacters === 1 && wantUppercase === 1 && wantNumbers === 0) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
      newPassword.push(randomValues[2]);
    } else if (wantSpecialCharacters === 0 && wantUppercase === 1 && wantNumbers === 1) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[2]);
      newPassword.push(randomValues[3]);
    } else if (wantSpecialCharacters === 1 && wantUppercase === 0 && wantNumbers === 1) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[2]);
      newPassword.push(randomValues[3]);
    } else if (wantSpecialCharacters === 1 && wantUppercase === 1 && wantNumbers === 1) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
      newPassword.push(randomValues[2]);
      newPassword.push(randomValues[3]);
    }

    while (newPassword.length < numberOfCharacters) {
      var randomPush = random();
      if (wantSpecialCharacters === 0 && wantUppercase === 0 && wantNumbers === 0) {
        newPassword.push(randomPush[0]);
      } else if (wantSpecialCharacters === 1 && wantUppercase === 0 && wantNumbers === 0) {
        let randomCharacter = [randomPush[0], randomPush[1]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * 2)]);
      } else if (wantSpecialCharacters === 0 && wantUppercase === 1 && wantNumbers === 0) {
        let randomCharacter = [randomPush[0], randomPush[2]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * 2)]);
      } else if (wantSpecialCharacters === 0 && wantUppercase === 0 && wantNumbers === 1) {
        let randomCharacter = [randomPush[0], randomPush[3]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * 2)]);
      } else if (wantSpecialCharacters === 1 && wantUppercase === 1 && wantNumbers === 0) {
        let randomCharacter = [randomPush[0], randomPush[1], randomPush[2]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * 3)]);
      } else if (wantSpecialCharacters === 0 && wantUppercase === 1 && wantNumbers === 1) {
        let randomCharacter = [randomPush[0], randomPush[2], randomPush[3]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * 3)]);
      } else if (wantSpecialCharacters === 1 && wantUppercase === 0 && wantNumbers === 1) {
        let randomCharacter = [randomPush[0], randomPush[1], randomPush[3]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * 3)]);
      } else if (wantSpecialCharacters === 1 && wantUppercase === 1 && wantNumbers === 1) {
        newPassword.push(randomPush[Math.floor(Math.random() * 4)]);
      }
    }

    let displayPassword = newPassword.join("");
    console.log(newPassword);
    console.log(newPassword.length);
    console.log(displayPassword);
    console.log(displayPassword.length);
    console.log(numberOfCharacters);
    let showPassword = document.getElementById("password");
    showPassword.textContent = displayPassword;
    newPassword = [];
    numberOfCharacters = "";
    wantSpecialCharacters = "";
    wantUppercase = "";
    wantNumbers = "";

  } else {
    console.log("Error: The scenario is not mapped.");
  }
}
//Captures when the button to generate a new password is clicked by the user and triggers the createPassword function.
requestPassword.addEventListener("click", createPassword);
