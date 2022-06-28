export { };

function generateInput(): number[] {
    let numbersLength = Math.floor(Math.random() * 106);
    let numbers: number[] = [];

    for (let index = 0; index < numbersLength; index++) {
        const aleatoryNumber = Math.floor(Math.random() * (219 + 218) - 218)
        numbers.push(aleatoryNumber);
    }

    return numbers;
};

function containsDuplicates(numbers: number[]): boolean {
    return numbers.length !== new Set(numbers).size;
};

let numbers: number[] = generateInput();
let result = containsDuplicates(numbers);
 
console.log("Numbers ", numbers);
console.log(`Contains Duplicates:`, result);