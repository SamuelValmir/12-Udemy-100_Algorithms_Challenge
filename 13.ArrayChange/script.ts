let finalArray;
function generateIntegerArray(): number[] {
    const integerArrayLength = Math.floor(Math.random() * (106 - 3) + 3);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (106 + 105) - 105);
        integerArray.push(element);
    };

    return integerArray;
};

function integerArrayChange(array: number[]): number {
    let integerArray = [...array];
    let changeCounter = 0;
    integerArray.sort();

    for (let i = 0; i < integerArray.length - 1; i++) {
        while (integerArray[i + 1] <= integerArray[i]) {
            integerArray[i + 1]++;
            changeCounter++;
        };

        while (integerArray[i + 1] > integerArray[i] + 1) {
            integerArray[i + 1]--;
            changeCounter++;
        };
    };
    finalArray = integerArray;
    return changeCounter;
};

let integerArray: number[] = generateIntegerArray();
let areSimilar = integerArrayChange(integerArray);

console.log("Integer Arrays: ", integerArray);
console.log("Array Change: ", areSimilar);
console.log("Final Array: ", finalArray);
