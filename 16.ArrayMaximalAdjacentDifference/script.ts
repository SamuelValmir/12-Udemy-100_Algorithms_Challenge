export { };

function generateIntegerArray(): number[] {
    const integerArrayLength = Math.floor(Math.random() * (11 - 3) + 3);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (16 + 15) - 15);
        integerArray.push(element);
    };

    return integerArray;
};

function arrayMaximalAdjacentDifference(inputArray: number[]): object {
    let result = {
        "arrayMaximalAdjacentDifference": 0,
        "pair": []
    };


    for (let i = 0; i < inputArray.length - 1; i++) { 
        let adjacentDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (adjacentDifference > result["arrayMaximalAdjacentDifference"]) {
            result["arrayMaximalAdjacentDifference"] = adjacentDifference;
            result["pair"] = [inputArray[i], inputArray[i + 1]];
        };
    };

    return result;
};

let input: number[] = generateIntegerArray();
let result = arrayMaximalAdjacentDifference(input);

console.log("Integer Array: ", input);
console.log("Array Maximal Adjacent Difference: ", result["arrayMaximalAdjacentDifference"]);
console.log("Pair: ", result["pair"]);

