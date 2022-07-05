export { };

function generateInput(): number {
    const integer = Math.floor(Math.random() * (110 - 5) + 5);

    return integer;
};

function digitDegree(number: number): number {
    let numberList = number.toString().split("");
    let digitDegree = 0;

    while (numberList.length > 1) {
        const sum = numberList.reduce((current: any, next: any): any => parseInt(current) + parseInt(next));
        numberList = sum.toString().split("");
        digitDegree++
    }

    return digitDegree;
};

let input: number = generateInput();
let result = digitDegree(input);

console.log("Number: ", input);
console.log("Digit Degree: ", result);