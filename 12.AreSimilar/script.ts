function generateArrays(): number[][] {
    const arraysLength = Math.floor(Math.random() * (10 - 3) + 3);
    let arrays: number[][] = [[], []];

    for (let i = 0; i < arraysLength; i++) {
        let aElement = Math.floor(Math.random() * (1001 - 1) + 1);
        let bElement = Math.floor(Math.random() * (1001 - 1) + 1);

        arrays[0].push(aElement);
        arrays[1].push(bElement);
    };

    return arrays;
};

function getAreSimilar(arrays: number[][]): boolean {
    let areSimilar = true;
    
    let arrayA = arrays[0];
    let arrayB = arrays[1];

    arrayA.sort();
    arrayB.sort();

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] !== arrayB[i]) return false;
    };

    return areSimilar;
};

let arrays: number[][] = generateArrays();
let areSimilar = getAreSimilar(arrays);

console.log("Arrays: ", arrays);
console.log("Are Similar: ", areSimilar);
