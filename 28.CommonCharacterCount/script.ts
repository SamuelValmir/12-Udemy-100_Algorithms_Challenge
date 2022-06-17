export { };
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generateInput(): string[] {
    let strings: string[] = [];
    for (let i = 0; i < 2; i++) {
        let stringLength = Math.floor(Math.random() * (16 - 1) + 1);
        let string = "";

        for (let i = 0; i < stringLength; i++) {
            const randomPos = Math.floor(Math.random() * letters.length);
            const letter = letters[randomPos];
            string += letter;
        };

        strings.push(string);
    };

    return strings;
};

function commonCharacterCount(string1: string, string2: string): number {
    const string2Array = string2.split("");
    let commonCharacterCount = 0;

    for (let i = 0; i < string1.length; i++) {
        const string1Letter = string1[i];
        if (string2Array.includes(string1Letter)) {
            string2Array.splice(string2Array.indexOf(string1Letter), 1);
            commonCharacterCount++;
        };
    };
    return commonCharacterCount;
};

let [string1, string2]: string[] = generateInput();
let result = commonCharacterCount(string1, string2);

console.log("String 1: ", string1);
console.log("String 2: ", string2);
console.log("Common Character Count: ", result);
