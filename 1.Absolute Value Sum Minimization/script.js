// export default integerArray;

let integerArray = [];
let absoluteValueSumMinimization;
let minSumValue = 0;

function buildIntegerArray() {
    let length = Math.floor(Math.random() * (201 - 1) + 1);

    for (let index = 0; index < length; index++) {
        integerArray.push(Math.floor(Math.random() * (107 - (-106)) + (-106)))
    }

    console.log(`Array length: ${length}`);
    console.log(`Array: ${integerArray}`);
    integerArray.sort();
};

function calculateAbsoluteValueSumMinimization() {
    let sumList = [];
    for (let x of integerArray) {

        let sum = 0;
        integerArray.forEach(element => {
            sum += Math.abs(element - x);
        });
        sumList.push(sum);

    };

    minSumValue = Math.min(...sumList);

    const count = {};

    // It counts repetition of elements
    for (let index = 0; index < sumList.length; index++) {
        let element = sumList[index];

        if (count[element]) {
            count[element]["counter"] += 1;
            count[element]["pos"].push(index);
        } else {
            count[element] = { "counter": 1, "pos": [index] };
        }

    }
    if (count[minSumValue]["counter"] > 1) {
        absoluteValueSumMinimization = -1;

        count[minSumValue]["pos"].forEach(pos => {
            if (absoluteValueSumMinimization < integerArray[pos]) {
                absoluteValueSumMinimization = integerArray[pos];
            }
        })
    } else {
        absoluteValueSumMinimization = integerArray[count[minSumValue]["pos"]];
    }
}

buildIntegerArray();
calculateAbsoluteValueSumMinimization();
console.log("The Absolute Value Sum Minimization Is: " + absoluteValueSumMinimization);
console.log("Minimum Sum Given: " + minSumValue);
