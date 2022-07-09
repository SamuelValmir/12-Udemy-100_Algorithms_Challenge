export { };

let letters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"];

function generateInput(): string {
    let string = "";
    let stringLength = Math.floor(Math.random() * (11 - 1) + 1);

    for (let i = 0; i < stringLength; i++) {
        let randomPos = Math.floor(Math.random() * letters.length);
        let letter = letters[randomPos];
        string += letter;
    }

    return string;
};
 
const encloseInBrackets = (string: string): string => "\"" + string + "\"";

let string: string = generateInput();
let result = encloseInBrackets(string);

console.log("String: ", string);
console.log("Result: ", result);