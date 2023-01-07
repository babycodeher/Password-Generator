
// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let mixedCharacterArray = [];

mixedCharacterArray = mixedCharacterArray.concat (specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters);

console.log(mixedCharacterArray);


let passwordLength = 0;

console.log(passwordLength);

//Define password prompt message

// Function to prompt user for password options
function getPasswordOptions() {


  // if (passwordLength > 9 && passwordLength <65) {
    
  //   let plusSpecialCharacter = confirm("Should the password include special characters?");
    
  //   if (plusSpecialCharacter === true) {
      
  //     mixedCharacterArray = mixedCharacterArray.concat(specialCharacters);
  //   }
    
  //   let plusNumericCharacter = confirm("Should the password include numeric characters?");
    
  //   if (plusNumericCharacter === true) {
      
  //     mixedCharacterArray = mixedCharacterArray.concat(specialCharacters, numericCharacters);
  //   }
    

  //   if (plusLowercasedCharacter === true) {
      
  //     mixedCharacterArray = mixedCharacterArray.concat(specialCharacters, numericCharacters, lowerCasedCharacters);

  //   }
  //   return mixedCharacterArray;

  // }
  

}

// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {
  
  passwordLength = prompt("What is your preferred password length? Enter a number between 10 and 64");

  console.log(passwordLength);

  let randomPassword = "";
  for (let i = 0; i < 100; i++) {
    
    randomPassword += "j"
    
  }

  return randomPassword;

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);