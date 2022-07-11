export { };

function generateInput(): any[] {
    const numberArray: number[] = [];
    const numberLength = Math.floor(Math.random() * (16 - 5) + 5);

    for (let i = 0; i < numberLength; i++) {
        let randomNumber = Math.floor(Math.random() * (21 + 20) - 20);
        numberArray.push(randomNumber);
    }

    let k = Math.floor(Math.random() * (11 - 1) + 1);

    return [numberArray, k];
};

function extractEachKth(numbers: number[], k: number): number[] {
    let extract = numbers.filter((_, index) => {
        if((index + 1) % 3 !== 0) return true
    });

    return extract;
};

let [numberArray, k]: any[] = generateInput();
let result = extractEachKth(numberArray, k);

console.log("Numbers: ", numberArray);
console.log("K: ", k);
console.log("Extract: ", result);