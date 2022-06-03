function generateIntegerArray(): number[] {
    const integerArrayLength = Math.floor(Math.random() * (11 - 2) + 2);
    let integerArray: number[] = [];

    for (let i = 0; i < integerArrayLength; i++) {
        let element = Math.floor(Math.random() * (41 - 1) + 1);
        integerArray.push(element);
    };

    return integerArray;
};

function getAvoidObstacles(coordinates: number[]): object {
    let minimalJumpLength = 0;
    let higherCoordinate = coordinates.reduce((previous, next) => Math.max(previous, next));
    let cleanStraightLine = [...Array(higherCoordinate * 2).keys()];
    let obstructedStraightLine = buildStraightLine(coordinates, cleanStraightLine);

    let traveledPath = [];
    let isThereObstacleInTraveledPath = true;
    while (isThereObstacleInTraveledPath) {
        minimalJumpLength++;
        traveledPath = [];
        for (let i = 0; i < cleanStraightLine.length; i += minimalJumpLength) {
            traveledPath.push(cleanStraightLine[i]);
        };
        isThereObstacleInTraveledPath = checkIfThereIsObstacle(traveledPath, obstructedStraightLine);
    };

    return { "traveledPath": traveledPath, "minimalJumpLength": minimalJumpLength };
};

function buildStraightLine(coordinates: number[], cleanStraightLine: number[]): object {
    let obstructedStraightLine = {};

    for (const point of cleanStraightLine) {
        if (coordinates.includes(point)) obstructedStraightLine[point] = { "obstacle": true };
        else obstructedStraightLine[point] = { "obstacle": false };
    };

    return obstructedStraightLine;
};

function checkIfThereIsObstacle(traveledPath: number[], obstructedStraightLine: object): boolean {
    let isThereObstacleInTraveledPath = false;

    for (let point of traveledPath) {
        if (obstructedStraightLine[point]["obstacle"] === true) {
            isThereObstacleInTraveledPath = true;
            break;
        };
    };

    return isThereObstacleInTraveledPath;
};


let input: number[] = generateIntegerArray();
let result = getAvoidObstacles(input);

console.log("Coordinates: ", input);
console.log("Minimal Jump Length: ", result["minimalJumpLength"]);
console.log("Minimal Jump Length: ", result["traveledPath"]);

