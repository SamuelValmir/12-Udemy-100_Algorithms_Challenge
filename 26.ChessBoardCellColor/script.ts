let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"];

function generateInput(): any[] {
    const arrayLength = Math.floor(Math.random() * letters.length);
    const size = Math.floor(Math.random() * arrayLength);

    let randomLettersArray: string[] = [];
    for (let i = 0; i < arrayLength; i++) {
        let randomPos = Math.floor(Math.random() * letters.length);

        randomLettersArray.push(letters[randomPos]);
    };
    return [randomLettersArray, size];
};

function chunkyMonkey(array: string[], size: number): string[][] {
    let splitted = [...array].splice(0, size);
    let rest = [...array].splice(size);

    return [splitted, rest];
};

let input: any[] = generateInput();
let result = chunkyMonkey(input[0], input[1]);

console.log("Array: ", input[0]);
console.log("Size: ", input[1]);
console.log("Splitted arrays: ", result);
