export { };

function generateInput(): any[] {
    let matrix: number[][] = [];

    let matrixLength = Math.floor(Math.random() * (6 - 1) + 1);
    const rowLength = Math.floor(Math.random() * (6 - 1) + 1);

    for (let i = 0; i < matrixLength; i++) {
        const row: number[] = [];

        for (let j = 0; j < rowLength; j++) {
            const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
            row.push(randomNumber);
        }

        matrix.push(row);
    }

    const a = Math.floor(Math.random() * matrixLength);
    const b = Math.floor(Math.random() * rowLength);

    return [matrix, a, b];
};


function crossingSum(matrix: number[][], rowIndex: number, columnIndex: number): number {
    let row: number[] = matrix[rowIndex];
    let column: number[] = matrix.map((row: number[]) => {
        return row[columnIndex];
    });

    // This sum is missing the interception between row and column
    let rowSum = 0;
    for (let i = 0; i < row.length; i++) {
        const element = row[i];

        if (i !== columnIndex) {
            rowSum += element;
        }
    }

    let columnSum: number = column.reduce((value, next) => value + next);

    return rowSum + columnSum;
};

let [matrix, a, b]: any[] = generateInput();
let result = crossingSum(matrix, a, b);

console.log("Matrix: ", matrix);
console.log("A: ", a);
console.log("B: ", b);
console.log("Result: ", result);