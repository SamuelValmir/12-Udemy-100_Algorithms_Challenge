export { };

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function generateInput(): string {
    const inputStringLength = Math.floor(Math.random() * (11 - 4) + 4);
    let randomLettersArray = [];
    for (let i = 0; i < inputStringLength; i++) {
        let randomPos = Math.floor(Math.random() * letters.length);
        randomLettersArray.push(letters[randomPos])
    };

    return randomLettersArray.join("");
};

function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();

    let reversedString = inputString.split("").reverse().join("");

    return inputString === reversedString;
};

let inputString: string = generateInput();
let result = isCaseInsensitivePalindrome(inputString);

console.log("Input String: ", inputString);
console.log("Is Case Insensitive Palindrome: ", result);

