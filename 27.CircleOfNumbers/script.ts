export { };

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function generateInput(): object {
    let n: number;

    do {
        n = Math.floor(Math.random() * (21 - 4) + 4);
    } while (n % 2 !== 0);

    let firstNumber = Math.floor(Math.random() * n);
    return { n, firstNumber };
};

function circleOfNumbers(n: number, firstNumber: number): number {
    const opposite = firstNumber + (n / 2);
    return opposite > n - 1 ? opposite - n : opposite;
};

let { n, firstNumber }: any = generateInput();
let result = circleOfNumbers(n, firstNumber);

console.log("N: ", n);
console.log("First Number: ", firstNumber);
console.log("Opposite: ", result);
