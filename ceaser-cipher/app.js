var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = "abcdefghijklmnopqrstuvwxyz"

let encryptedString = ""


function ceasarCipher() {
 
for(let i = 0; i < input.length;i++) {
    let character = input[i]
    // checks for non lettered characters and keeps them
    if (character === " ") {
        encryptedString+= " "
        continue;
    } else if (character === "!") {
        encryptedString+= "!"
        continue;
    } else if (character === "?") {
        encryptedString+= "?"
        continue;
    }else if (character === "@") {
        encryptedString+= "@"
        continue;
    } else if (character === "$") {
        encryptedString+= "$"
        continue;
    } else if (character === "%") {
        encryptedString+= "%"
        continue;
    } else if (character === "^") {
        encryptedString+= "^"
        continue;
    } else if (character === "&") {
        encryptedString+= "&"
        continue;
    } else if (character === "*") {
        encryptedString+= "*"
        continue;
    } else if (character === "(") {
        encryptedString+= "("
        continue;
    } else if (character === ")") {
        encryptedString+= ")"
        continue;
    }

    let index = alphabet.indexOf(character)

    let letterShift = index + shift;

    let encodedChar = alphabet[letterShift]
    // lets the encoded letter wrap around to the correct index
    if(letterShift > 25) {
     encodedChar = alphabet[letterShift - 26]
     }

     encryptedString += encodedChar
}
 return encryptedString
}


console.log(ceasarCipher())