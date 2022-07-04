export { };

function generateInput(): number[] {
    const input: number[] = []

    const deposit = Math.floor(Math.random() * (101 - 1) + 1);
    const threshold = Math.floor(Math.random() * (201 - (deposit + 1)) + (deposit + 1));
    const rate = Math.floor(Math.random() * (101 - 1) + 1);

    input.push(deposit, threshold, rate);

    return input;
};

function depositProfit(deposit: number, threshold: number, rate: number): number {
    let years = 0;

    while(deposit < threshold){
        deposit += deposit * (rate / 100);
        years++
    }
    
    return years;
};

let [deposit, threshold, rate]: number[] = generateInput();
let result = depositProfit(deposit, threshold, rate);

console.log("Deposit: ", deposit);
console.log("Threshold: ", threshold);
console.log("Rate: ", rate);
console.log("Years: ", result);