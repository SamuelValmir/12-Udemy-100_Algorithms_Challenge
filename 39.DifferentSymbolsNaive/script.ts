let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generateInput(): string {
    const string: string[] = []
    const stringLength = Math.floor(Math.random() * (1001 - 3) + 3);

    for (let i = 0; i < stringLength; i++) {
        const randomPos = Math.floor(Math.random() * stringLength);
        string.push(letters[randomPos]);
    }

    return string.join("");
};

function differentSymbolsNaive(string: string): number {
    let differentSymbolsNaive = 0;
    const stringList = string.split("");
    const lettersManager: object = {};

    stringList.forEach(letter => {
        if (lettersManager[letter] === undefined) {
            lettersManager[letter] = 0
            differentSymbolsNaive++;
        }

        lettersManager[letter]++;
    });

    return differentSymbolsNaive;
};

let string: string = generateInput();
let result = differentSymbolsNaive(string);

console.log("String: ", string);
console.log("Different Symbols Naive: ", result);