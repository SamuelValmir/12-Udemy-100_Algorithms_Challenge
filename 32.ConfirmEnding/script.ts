export { };

let letters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"];

function generateInput(): string[] {

    let strings: string[] = [];

    for (let index = 0; index < 2; index++) {
        strings.push(generateString());
    }

    return strings;
};

function generateString(): string {
    let string = "";
    let stringLength = Math.floor(Math.random() * (11 - 1) + 1);

    for (let i = 0; i < stringLength; i++) {
        let randomPos = Math.floor(Math.random() * letters.length);
        let letter = letters[randomPos];
        string += letter;
    }

    return string;
};

function confirmEnding(string: string, ending: string): boolean{
    return string.endsWith(ending);
};

let [string, ending]: string[] = generateInput();
let result = confirmEnding(string, ending);

console.log("String ", string);
console.log("Ending ", ending);
console.log(`Result:`, result);