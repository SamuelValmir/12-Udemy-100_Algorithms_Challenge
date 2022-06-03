function generateTwoDigitsNumber(): number {
    const random: number = Math.floor(Math.random() * (100 - 10) + 10);
    return random;
}

function addTwoDigits(number: number): number {
    const splitted = number.toString().split("");

    return parseInt(splitted[0]) + parseInt(splitted[1]);
}

let twoDigitsNumber: number = generateTwoDigitsNumber();

console.log("Two Digits Number = ", twoDigitsNumber);
console.log("Two Digits Number Sum = ", addTwoDigits(twoDigitsNumber));
