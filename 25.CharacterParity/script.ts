function generateInput(): string {
    return Math.random().toString(36)[2];
};

function characterParity(symbol: string): string {
    let result: string;
    let symbolNumber = parseInt(symbol);

    if (Number.isNaN(symbolNumber)) {
        result = "Not a Digit";
    } else {
        result = symbolNumber % 2 === 0 ? "Even" : "Odd";
    };

    return result;
};

let symbol: string = generateInput();
let result = characterParity(symbol);

console.log("Symbol: ", symbol);
console.log("Result: ", result);

