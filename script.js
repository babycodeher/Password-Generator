
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

// mixedCharacterArray = mixedCharacterArray.concat (specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters);

// console.log(mixedCharacterArray);


let passwordLength = 0;
//Define password prompt message

// Function to prompt user for password options
function getPasswordOptions() {


  if (passwordLength > 9 && passwordLength <65) {
    
       let plusSpecialCharacter = prompt("Should the password include special characters?");
    

          if (plusSpecialCharacter === true) {
            
            mixedCharacterArray = mixedCharacterArray.concat(specialCharacters);
          }
    
      let plusNumericCharacter = prompt("Should the password include numeric characters?");
    
          if (plusNumericCharacter === true) {
            
            mixedCharacterArray = mixedCharacterArray.concat(numericCharacters);

          }

      let plusLowerCasedCharacter = prompt("Should the password include lower cased character?")

          if (plusLowerCasedCharacter === true) {
            
            mixedCharacterArray = mixedCharacterArray.concat(lowerCasedCharacters);

          }

      let plusUpperCasedCharacter = prompt("Should the password include upper cased characters?");

          if (plusUpperCasedCharacter === true) {mixedCharacterArray = mixedCharacterArray.concat(upperCasedCharacters);
            
          }

          return mixedCharacterArray;

          }

  else{

        alert("Nice try! Please select a number between 10 and 64");

  }
  
  
}



// Function for getting a random element from an array
function getRandom() {
  
  
  let randomIndex = Math.floor(Math.random()*mixedCharacterArray.length)
  
  // console.log(mixedCharacterArray[randomIndex]);let randomIndex = Math.floor(Math.random()*arrayName.length)
  
  return randomIndex;
  
}

// Function to generate password with user input
function generatePassword() {
  
  let randomPassword = "";
  
  passwordLength = prompt("What is your preferred password length? Enter a number between 10 and 64");
  
  
  
  for (let i = 0; i < passwordLength; i++) {
    
    randomPassword += "j"
    
  }
  
  return randomPassword;
  
  
}




// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  getPasswordOptions();
  getRandom();
  let passwordText = document.querySelector('#password');


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
