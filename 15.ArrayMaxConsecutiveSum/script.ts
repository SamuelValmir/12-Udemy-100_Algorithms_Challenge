function generateIntegerArrayAndK(): object {
    const integerArrayLength = Math.floor(Math.random() * (106 - 3) + 3);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (1001 - 1) + 1);
        integerArray.push(element);
    };

    let k = Math.floor(Math.random() * (integerArrayLength + 1 - 1) + 1);

    return { "integerArray": integerArray, "k": k };
};

function getArrayMaxConsecutiveSum(inputArray: number[], k: number): object {
    let maximalPossibleSum = 0;
    let array: number[];

    for (let i = 0; i < inputArray.length; i++) {
        let elements = inputArray.slice(i, i + k);

        // This avoids to sum less then k elements
        if (elements.length === k) {
            let sum = elements.reduce((acc, next) => acc += next);
            maximalPossibleSum = sum > maximalPossibleSum ? sum : maximalPossibleSum;
            array = [...elements];
        };
    };

    return { "maximalPossibleSum": maximalPossibleSum, "array": array };
};

let input: object = generateIntegerArrayAndK();
let result = getArrayMaxConsecutiveSum(input["integerArray"], input["k"]);

console.log("Integer Array: ", input);
console.log("K: ", input["k"]);
console.log("Array Max Consecutive Sum: ", result["maximalPossibleSum"]);
console.log("Elements of Array Max Consecutive Sum: ", result["array"]);
