export { };

function generateInput(): any[] {
    const numbersLength = Math.floor(Math.random() * (316 - 2) + 2);
    const sum = Math.floor(Math.random() * (2001 + 2000) - 2000);
    let numbers: number[] = [];

    for (let i = 0; i < numbersLength; i++) {
        numbers.push(Math.floor(Math.random() * (1001 + 1000) - 1000));
    };

    return [numbers, sum];
};

function findClosestPair(numbers: number[], sum: number): number {
    let distance = -1;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            let nextNumber = numbers[j];

            if (number + nextNumber === sum) {
                distance = Math.abs(j - i) > distance ? Math.abs(j - i) : distance;
            };
        };
    };

    return distance;
};

let [numbers, sum]: any[] = generateInput();
let result = findClosestPair(numbers, sum);

console.log("Numbers: ", numbers);
console.log("Sum: ", sum);
console.log("Fare: ", result);