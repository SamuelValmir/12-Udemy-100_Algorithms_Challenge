function generateInput(): number {
    const year = Math.floor(Math.random() * (2023 - 1) + 1);

    return year;
};

function centuryFromYear(year: number): number {
    let century = Math.trunc(year / 100);
    if (year % 100 !== 0) century++;
    return century;
};

let year: number = generateInput();
let result = centuryFromYear(year);

console.log("Year: ", year);
console.log("Century: ", result);

