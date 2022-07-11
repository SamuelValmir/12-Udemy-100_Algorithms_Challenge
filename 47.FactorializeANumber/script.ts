export { };

function generateInput(): number {
    return Math.floor(Math.random() * 10);
};

function factorializeANumber(number: number): number {
    let factorial = 1;

    for (let i = 0; i < number; i++) {
        factorial *= (number - i)
    }

    return factorial;
};

let number: number = generateInput();
let result = factorializeANumber(number);

console.log("Number: ", number);
console.log("Factorial: ", result);