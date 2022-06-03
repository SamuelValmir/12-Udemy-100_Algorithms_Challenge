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
    let stringLenth = Math.floor(Math.random() * (16 - 2) + 2);
    let shuffledAlphabet = letters.shuffle();

    let stringList = shuffledAlphabet.slice(0, stringLenth);
    let stringLiteral = stringList.join("");

    return stringLiteral;
};

function checkIsSubsequence(string: string): boolean {
    let isSubsequence = true;

    for (let i = 0; i < string.length - 1; i++) {
        let currentLetter = string[i];
        let nextLetter = string[i + 1];

        if (currentLetter.charCodeAt(0) > nextLetter.charCodeAt(0)) isSubsequence = false;
    };

    return isSubsequence;
};

let inputtedString = generateInputString();
let isSubsequence = checkIsSubsequence(inputtedString);

console.log("Inputted String: ", inputtedString);
console.log("Is a subsequence of the plaintext alphabet?: ", isSubsequence);
