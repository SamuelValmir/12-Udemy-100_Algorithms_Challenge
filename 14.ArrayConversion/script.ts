
function generateIntegerArray(): number[] {
    const integerArrayLength = Math.floor(Math.random() * (21 - 1) + 1);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (100 + 9) - 9);
        integerArray.push(element);
    };

    return integerArray;
};

function getArrayConversion(array: number[]): number[] {
    let arrayConversion = [...array];
    let iteration = 0;
    
    while (arrayConversion.length > 1) {
        if (iteration % 2 === 0) {
            sumOrMultiplyPairs(arrayConversion, "+");
        } else {
            sumOrMultiplyPairs(arrayConversion, "*");
        };

        iteration++
    };

    return arrayConversion;
};

function sumOrMultiplyPairs(array: number[], operation: string) {
    for (let i = 0; i < array.length - 1; i++) {
        eval(`array[i] ${operation}= array[i + 1]`)
        array.splice(i + 1, 1);
    };
}

let integerArray: number[] = generateIntegerArray();
let arrayConversion = getArrayConversion(integerArray);

console.log("Integer Array: ", integerArray);
console.log("Array Conversion: ", arrayConversion);
