export { };

function generateInput(): any[] {

    let numbersLength = Math.floor(Math.random() * 55001);
    let k = Math.floor(Math.random() * 35001);
    let numbers: string[] = [];

    for (let index = 0; index < numbersLength; index++) {
        const aleatoryNumber = Math.floor(Math.random() * (232 + 231) - 231)
        numbers.push(aleatoryNumber.toString());
    }

    return [numbers, k];
};


function containsCloseNumbers(numbersString: string[], k: number): object {
    let numbers: number[] = [];
    numbersString.forEach(string => numbers.push(parseInt(string)));

    let containsCloseNumbers = false;
    let pairsIndexes: number[][] = [];
    let repeatedObject = {};

    if (containsDuplicate(numbers)) {
        let repeatedElements = numbers.filter((value, index) => numbers.indexOf(value) !== index);

        numbers.forEach((number, index) => {
            if (repeatedElements.includes(number)) {
                if (!repeatedObject[number]) repeatedObject[number] = [];

                repeatedObject[number].push(index);
            }
        })

        Object.values(repeatedObject).forEach((indexList: any) => {
            // It generates all possible combinations
            let pairs = indexList.flatMap((value: number, index: number) =>
                indexList.slice(index + 1).map((element: number) => [value, element])
            );

            pairs.forEach((pair: number[]) => {
                let firstElement = pair[0];
                let secondElement = pair[1];

                let absoluteDifference = Math.abs(firstElement - secondElement);

                if (absoluteDifference <= k) {
                    containsCloseNumbers = true;
                    pairsIndexes.push([firstElement, secondElement]);
                }
            });
        });
    }

    return { containsCloseNumbers, pairsIndexes };
};

function containsDuplicate(array: number[]): boolean {
    return array.length !== new Set(array).size;
}

let [numbers, k]: any[] = generateInput();
let result = containsCloseNumbers(numbers, k);
 
console.log("Numbers ", numbers);
console.log("K ", k);
console.log(`Contains Close Numbers:`, result["containsCloseNumbers"]);
console.log(`Pairs Indexes:`, result["pairsIndexes"]);