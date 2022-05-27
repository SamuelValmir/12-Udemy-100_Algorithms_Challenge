function generatePeoplesWeight(): number[] {
    let peoplesWeight = [];

    let rowLenth = Math.floor(Math.random() * (2 - 1) + 1);

    for (let i = 0; i < rowLenth; i++) {
        let randomPeopleWeight = Math.floor(Math.random() * (101 - 45) + 45);
        peoplesWeight.push(randomPeopleWeight);
    };

    return peoplesWeight;
};

function getAlternationSums(peoplesWeightList: number[]): number[] {
    let team1 = [];
    let team2 = [];
    let team1TotalWeight: number;
    let team2TotalWeight: number;
    let alternationSums = [];

    for (let i = 0; i < peoplesWeightList.length; i++) {
        if (i % 2 == 0) {
            team1.push(peoplesWeightList[i]);
        } else {
            team2.push(peoplesWeightList[i]);
        }

    };

    team1TotalWeight = team1.reduce((acc, nextElement) => {
        acc += nextElement;
        return acc;
    });

    if (peoplesWeightList.length > 1) {
        team2TotalWeight = team2.reduce((acc, nextElement) => {
            acc += nextElement;
            return acc;
        });
    } else {
        team2TotalWeight = 0;
    }

    alternationSums.push(team1TotalWeight);
    alternationSums.push(team2TotalWeight);

    return alternationSums;
};

let peoplesWeight: number[] = generatePeoplesWeight();
let alternationSums = getAlternationSums(peoplesWeight);

console.log("Peoples Weight List: ", peoplesWeight);
console.log("Alternation Sums of Team 1 and Team 2: ", alternationSums);
