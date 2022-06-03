let letters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"];

function generateArray(): string[] {
    let array: string[] = [];
    let arrayLength: number = Math.floor(Math.random() * (11 - 1) + 1);

    for (let index = 0; index < arrayLength; index++) {
        array.push(generateString());
    }

    return array;
}

function generateString(): string {
    let string = "";
    let stringLength = Math.floor(Math.random() * (11 - 1) + 1);

    stringLength
    for (let i = 0; i < stringLength; i++) {
        let randomPos = Math.floor(Math.random() * letters.length);
        let letter = letters[randomPos];
        string += letter;
    }

    return string;
}

function allLongestStrings(stringList: string[]): string[] {
    let longestLength: number = getLongestLength(stringList);
    let allLongestStrings: string[] = stringList.filter(element => element.length === longestLength);

    return allLongestStrings;
}

function getLongestLength(stringList: string[]): number {

    let longestString: string = stringList.reduce((acc, current) => {
        if (current.length > acc.length) {
            return current;
        }
        return acc;
    });

    let longestLength = longestString.length;

    return longestLength;
}

let array: string[] = generateArray();

console.log("Inputted Array = ", array);
console.log("All Longest Strings = ", allLongestStrings(array));
