export { };

function generateInput(): number[] {
    const children = Math.floor(Math.random() * (11 - 1) + 1);
    const candies = Math.floor(Math.random() * (101 - 2) + 2);

    return [children, candies];
};

function candies(children: number, candies: number): number {
    return Math.floor(candies / children) * children;
};

let input: number[] = generateInput();
let result = candies(input[0], input[1]);

console.log("Children: ", input[0]);
console.log("Candies: ", input[1]);
console.log("Children Will Eat: ", result);
