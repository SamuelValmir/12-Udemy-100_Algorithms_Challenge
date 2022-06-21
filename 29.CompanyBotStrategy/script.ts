export { };

function generateInput(): number[][] {
    let trainingData: number[][] = [];
    let trainingDataLength = Math.floor(Math.random() * (21 - 1) + 1);

    for (let i = 0; i < trainingDataLength; i++) {
        let time = Math.floor(Math.random() * 11);
        let correctness = Math.floor(Math.random() * (2 + 1) - 1);

        trainingData.push([time, correctness]);
    };

    return trainingData;
};

function companyBotStrategy(trainingData: number[][]): number {

    let sum = 0;
    let counter = 0;
    trainingData.forEach(information => {
        let answerTime: number, correctness: number;
        [answerTime, correctness] = information;

        if (correctness === 1) {
            sum += answerTime;
            counter++;
        }

    });

    return counter !== 0 ? sum / counter : 0;
};

let trainingData: number[][] = generateInput();
let result = companyBotStrategy(trainingData);

console.log("Training Data: ", trainingData);
console.log("Average: ", result);
