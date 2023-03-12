
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

// Here we define the Variables Globally
let mixedCharacterArray;

let passwordLength;


// Function to prompt user for password options
function getPasswordOptions() {

  // Update/redeclare  an empty VALUE
  mixedCharacterArray = [];

  if (passwordLength > 9 && passwordLength < 65) {

    // Confirmation if statement specifying users desired password character mix
    let plusSpecialCharacter = confirm("Should the password include special characters?");

    if (plusSpecialCharacter === true) {

      mixedCharacterArray = mixedCharacterArray.concat(specialCharacters);
    }

    let plusNumericCharacter = confirm("Should the password include numeric characters?");

    if (plusNumericCharacter === true) {

      mixedCharacterArray = mixedCharacterArray.concat(numericCharacters);

    }

    let plusLowerCasedCharacter = confirm("Should the password include lower cased character?")

    if (plusLowerCasedCharacter === true) {

      mixedCharacterArray = mixedCharacterArray.concat(lowerCasedCharacters);

    }

    let plusUpperCasedCharacter = confirm("Should the password include upper cased characters?");

    if (plusUpperCasedCharacter === true) {
      mixedCharacterArray = mixedCharacterArray.concat(upperCasedCharacters);

    }

    // If statement checks if user has selected any character type
    if (mixedCharacterArray.length === 0) {
      alert("Please select at least one character type.");
      getPasswordOptions();
    }

    return mixedCharacterArray;

  }

  else {

    alert("Nice try! Please select a number between 10 and 64");

  }

}

// Function for getting a random element from an array
function getRandom() {

  let randomIndex = Math.floor(Math.random() * mixedCharacterArray.length);

  return randomIndex;

}


// Function to generate password with user input
function generatePassword() {

  let randomPassword = "";

  //Define password prompt message
  passwordLength = prompt("What is your preferred password length? Enter a number from 10 and 64");

  let dataSet = getPasswordOptions();
  console.log(dataSet);
  // console.log("******");
  console.log(mixedCharacterArray);

  for (let i = 0; i < passwordLength; i++) {
    // Console check to confirm the for loop sequence output
    console.log("I is: ", i);

    let indexNumber = getRandom();
    // Console check to confirm random index number being generated
    console.log(indexNumber);
    randomPassword += dataSet[indexNumber];
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
