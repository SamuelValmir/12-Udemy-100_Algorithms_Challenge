export { };

function generateInput(): number {
    let number = Math.floor(Math.random() * (101 + 100) - 100);

    return number;
};

function celsiusToFahrenheit(number: number): number {
    return (number * 9 / 5) + 32;
};

let celsius: number = generateInput();
let result = celsiusToFahrenheit(celsius);

console.log("Celsius ", celsius);
console.log(`Fahrenheit:`, result);