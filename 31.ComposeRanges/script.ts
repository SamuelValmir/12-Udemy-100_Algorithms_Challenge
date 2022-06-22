export { };

function generateInput(): number[] {
    let integers: number[] = [];
    let integersLength: number = Math.floor(Math.random() * 16);
    let integer: number;

    for (let i = 0; i < integersLength; i++) {
        integer = Math.floor(Math.random() * (11 - 1) + 1);

        while (integers.includes(integer)) {
            integers.splice(integers.findIndex(e => e === integer), 1);
            integer = Math.floor(Math.random() * (11 - 1) + 1);
        }

        integers.push(integer);
    };

    integers.sort((a, b) => a - b);

    return integers;
};

function composeRanges(numbers: number[]): string[] {
    let ranges: string[] = [];
    let startRange: number = 0;
    let endRange: number = 0;
    let start = true;

    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        let next = numbers[i + 1];

        if (start) {
            startRange = current;
            start = false;
        }

        if (next !== undefined) {
            if (current !== next - 1) {
                start = true;

                // Pushes only the startRange in the case the range has only one element. E.g ["1"]
                if (current === startRange) {
                    pushRange(startRange);
                } else {
                    endRange = current;
                    pushRange(startRange, endRange);
                }
            }

        } else if (startRange !== current) { // It ads the last element of the array as a endRange
            endRange = current;
            pushRange(startRange, endRange);
        } else { // It ads the last element of the array as a startRange
            pushRange(startRange);
        }

    }

    function pushRange(startRange: number, endRange: any = undefined) {
        if (endRange) {
            ranges.push(`${startRange}->${endRange}`);
            return;
        }
        ranges.push(`${startRange}`)
    }

    return ranges;
};

let numbers: number[] = generateInput();
let result = composeRanges(numbers);

console.log("Integers ", numbers);
console.log(`Result:`, result);