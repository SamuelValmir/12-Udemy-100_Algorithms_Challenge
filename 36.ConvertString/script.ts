export { };

let characters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generateInput(): string[] {
    let array: string[] = [];
    
    for (let index = 0; index < 2; index++) {
        array.push(generateString());
    }

    return array;
};

function generateString(): string {
    let string = "";
    let stringLength = Math.floor(Math.random() * (1001 - 1) + 1);

    for (let i = 0; i < stringLength; i++) {
        let randomPos = Math.floor(Math.random() * characters.length);
        let char = characters[randomPos];
        string += char;
    }

    return string;
}

function convertString(s: string, t: string): boolean {
    let sList = s.split("");
    let tList = t.split("");

    let word = "";
    let tIndex = 0;
    for (let i = 0; i < sList.length; i++) {
        if (sList[i] === tList[tIndex]) {
           word = word.concat(tList[tIndex]);
           tIndex++;
        }
    }

    return word === t;
};

let [s, t]: string[] = generateInput();
let result = convertString(s, t);

console.log("S: ", s);
console.log("T: ", t);
console.log("Result: ", result);