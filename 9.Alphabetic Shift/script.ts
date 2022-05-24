let letters = {
    list: Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),

    shuffle: function (): string[] {
        let randomLetters = [];

        for (let currentIndex = this.list.length; currentIndex > 0; currentIndex--) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            let randomLetter = this.list[randomIndex];
            randomLetters.push(randomLetter);
        };

        return randomLetters;
    }
};

function generateInputString(): string {
    let stringLenth = Math.floor(Math.random() * (11 - 1) + 1);
    let shuffledAlphabet = letters.shuffle();
    let stringList = shuffledAlphabet.slice(0, stringLenth);
    let stringLiteral = stringList.join("");

    return stringLiteral;
};

function getAlphabetShift(inputString: string): string {
    let alphabetShiftList: string[] = [];

    for (let i = 0; i < inputString.length; i++) {
        let letter = inputString[i];
        let charCode = letter.charCodeAt(0);
        let nextCharCode = ++charCode;

        if (charCode === 123) { // If its "z"
            nextCharCode = 97; // Becomes "a"
        };

        let nextLetter = String.fromCharCode(nextCharCode);
        alphabetShiftList.push(nextLetter);
    };

    let alphabetShift = alphabetShiftList.join("");

    return alphabetShift;
};

let inputtedString = generateInputString();
let alphabetShift = getAlphabetShift(inputtedString);

console.log("Inputted String: ", inputtedString);
console.log("Output String: ", alphabetShift);
