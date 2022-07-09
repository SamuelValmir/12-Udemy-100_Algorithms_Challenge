export { };

function generateInput(): number[] {
    const numberArray: number[] = [];
    const numberLength = Math.floor(Math.random() * (110 - 1) + 1);

    for (let i = 0; i < numberLength; i++) {
        let randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
        numberArray.push(randomNumber);
    }

    return numberArray;
};

function evenDigitsOnly(numbers: number[]): boolean {
    let evenDigitsOnly = true;
    numbers

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            evenDigitsOnly = false;
            break;
        } ;
    };


    return evenDigitsOnly;
}

let numberArray: number[] = generateInput();
let result = evenDigitsOnly(numberArray);

console.log("Numbers: ", numberArray);
console.log("Even Digits Only: ", result);