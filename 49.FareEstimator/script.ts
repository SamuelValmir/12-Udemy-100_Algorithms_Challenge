export { };

function generateInput(): number {
    return Math.floor(Math.random() * (110 - 10) + 10);
};

function fermactor(n: number): number[] {

    number;

    for (let i = 1; i < n; i++) {

        for (let j = 1; j < i; j++) {
            if ((i ** 2) - (j ** 2) === n) {
                return [i, j];
            };
        };
    };   

    return [];
};

let number: number = generateInput();
let result = fermactor(number);
    
console.log("Number: ", number);
console.log("Result: ", result);