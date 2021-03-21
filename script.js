//Global Variables
var requestPassword = document.getElementById("generate");
var specialCharacters = ["!", "$", "%", "&", "*", "+", "-", "<", ">", "@", "{", "}", "~"];
var lowercaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var uppercaseLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

//Function to create a random collection of lowercase letters, uppercase letters, special characters, and numbers.
var random = function() {
  let randomCharacters = [];
  let randomLowerCase = Math.floor(Math.random() * lowercaseLetters.length);
  let randomUperCase = Math.floor(Math.random() * uppercaseLetters.length);
  let randomSpecialCharacter = Math.floor(Math.random() * specialCharacters.length);
  let randomNumber = Math.floor(Math.random() * 10);
  let lowerCasePasswordCharacter = lowercaseLetters[randomLowerCase];
  let specialPasswordCharacter = specialCharacters[randomSpecialCharacter];
  let upperCasePasswordCharacter = uppercaseLetters[randomUperCase];
  randomCharacters.push(lowerCasePasswordCharacter);
  randomCharacters.push(specialPasswordCharacter);
  randomCharacters.push(upperCasePasswordCharacter);
  randomCharacters.push(randomNumber);
  return randomCharacters;
}

//Function that creates the password for the user. It evaluates the user's password requirements and returns the suggested password that meets the criteria provided.
var createPassword = function() {
  var newPassword = [];
  var numberOfCharacters = parseInt(prompt("Specify the number of characters for your password (8 to 128)"));

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Your request cannot be processed. The number of characters for your password must be between 8 and 128. Please try again.");
  } else if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    var randomValues = random();
    var wantSpecialCharacters = confirm("Do you want special characters in your password?");
    var wantUppercase = confirm("Do you want uppercase letters in your password?");
    var wantNumbers = confirm("Do you want numbers in your password?");

    if (!wantSpecialCharacters && !wantUppercase && !wantNumbers) {
      newPassword.push(randomValues[0]);
    } else if (wantSpecialCharacters && !wantUppercase && !wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
    } else if (!wantSpecialCharacters && wantUppercase && !wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[2]);
    } else if (!wantSpecialCharacters && !wantUppercase && wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[3]);
    } else if (wantSpecialCharacters && wantUppercase && !wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
      newPassword.push(randomValues[2]);
    } else if (!wantSpecialCharacters && wantUppercase && wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[2]);
      newPassword.push(randomValues[3]);
    } else if (wantSpecialCharacters && !wantUppercase && wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
      newPassword.push(randomValues[3]);
    } else if (wantSpecialCharacters && wantUppercase && wantNumbers) {
      newPassword.push(randomValues[0]);
      newPassword.push(randomValues[1]);
      newPassword.push(randomValues[2]);
      newPassword.push(randomValues[3]);
    }

    while (newPassword.length < numberOfCharacters) {
      var randomPush = random();
      if (!wantSpecialCharacters && !wantUppercase && !wantNumbers) {
        newPassword.push(randomPush[0]);
      } else if (wantSpecialCharacters && !wantUppercase && !wantNumbers) {
        let randomCharacter = [randomPush[0], randomPush[1]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * randomCharacter.length)]);
      } else if (!wantSpecialCharacters && wantUppercase && !wantNumbers) {
        let randomCharacter = [randomPush[0], randomPush[2]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * randomCharacter.length)]);
      } else if (!wantSpecialCharacters && !wantUppercase && wantNumbers) {
        let randomCharacter = [randomPush[0], randomPush[3]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * randomCharacter.length)]);
      } else if (wantSpecialCharacters && wantUppercase && !wantNumbers) {
        let randomCharacter = [randomPush[0], randomPush[1], randomPush[2]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * randomCharacter.length)]);
      } else if (!wantSpecialCharacters && wantUppercase && wantNumbers) {
        let randomCharacter = [randomPush[0], randomPush[2], randomPush[3]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * randomCharacter.length)]);
      } else if (wantSpecialCharacters && !wantUppercase && wantNumbers) {
        let randomCharacter = [randomPush[0], randomPush[1], randomPush[3]];
        newPassword.push(randomCharacter[Math.floor(Math.random() * randomCharacter.length)]);
      } else if (wantSpecialCharacters && wantUppercase && wantNumbers) {
        newPassword.push(randomPush[Math.floor(Math.random() * randomPush.length)]);
      }
    }

    let displayPassword = newPassword.join("");
    console.log(numberOfCharacters);
    console.log(displayPassword.length);
    console.log(newPassword);
    console.log(displayPassword);

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
