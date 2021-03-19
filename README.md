# password-generator
UM Coding Bootcamp Homework #3 - Random Password Generator

##Functionality:
*The password generator can create random passwords between 8 and 128 characters.
*The user can select the requirements for the password as follows:
  - If the user only types the number of characters and rejects the options to add special characters, uppercase letters, and numbers, then the password will be a string of random lowercase letters.
  - If the user, after indicating the number of characters, accepts any of the additional elements (special characters, uppercase letters, and numbers), then the password created will be a mix of lowercase letters and the additional elements selected by the user.
  - All the possible user selections were mapped to ensure that the password created will meet the specifications provided by the user. If by chance, a combination was not mapped, the function will return an error message indicating that the case is not mapped. Thus a password cannot be created.
