export { };

function generateIntegerArray(): object {
    const integerArrayLength = Math.floor(Math.random() * (11 - 2) + 2);
    const elemToReplace = Math.floor(Math.random() * (11 - 0) + 0);
    const substitutionElem = Math.floor(Math.random() * (11 - 0) + 0);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (11 - 0) + 0);
        integerArray.push(element);
    };

    return { "integerArray": integerArray, "elemToReplace": elemToReplace, "substitutionElem": substitutionElem };
};

function getArrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    let arrayReplace = [];
    arrayReplace = inputArray.map(value => {
        if (value === elemToReplace) {
            return substitutionElem;
        };
        return value;
    });

    console.log(arrayReplace)

    return arrayReplace;
};

let input: object = generateIntegerArray();
let result = getArrayReplace(input["integerArray"], input["elemToReplace"], input["substitutionElem"]);

console.log("Integer Array: ", input["integerArray"]);
console.log("Element To Replace: ", input["elemToReplace"]);
console.log("Substitution Element: ", input["substitutionElem"]);
console.log("Array Replace: ", result);
