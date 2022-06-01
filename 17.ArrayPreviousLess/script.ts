export { };

function generateIntegerArray(): number[] {
    const integerArrayLength = Math.floor(Math.random() * (16 - 3) + 3);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (201 - 1) + 1);
        integerArray.push(element);
    };

    return integerArray;
};

function getArrayPreviousLess(inputArray: number[]): number[] {
    let arrayPreviousLess = [];

    for (let i = 0; i < inputArray.length; i++) {
        let elementsBeforeI = inputArray.slice(0, i);
        let smaller = searchPreviousLessThan([...elementsBeforeI], inputArray[i]);
        arrayPreviousLess.push(smaller);
    };
    return arrayPreviousLess;
};

function searchPreviousLessThan(array: number[], value: number) {
    let smaller = -1;

    for (let i = array.length - 1; i >= 0; i--) {
        if(array[i] < value){
            smaller = array[i];
            break
        };
    };

    return smaller;
};

let input: number[] = generateIntegerArray();
let result = getArrayPreviousLess(input);

console.log("Integer Array: ", input);
console.log("Array Previous Less: ", result);
