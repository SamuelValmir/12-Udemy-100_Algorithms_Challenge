export { };

function generateInput(): any[] {
    const rideTime = Math.floor(Math.random() * (51 - 10) + 10);
    const rideDistance = Math.floor(Math.random() * (21 - 5) + 5);
    const costLength = Math.floor(Math.random() * (11 - 4) + 4);
    const costPerMinute: number[] = [];
    const costPerMile: number[] = [];


    for (let i = 0; i < costLength; i++) {
        costPerMinute.push(Number((Math.random() * (350 - 0.1) + 0.1).toFixed(1)));
        costPerMile.push(Number((Math.random() * (7 - 0.5) + 0.5).toFixed(1)));
    };

    return [rideTime, rideDistance, costPerMinute, costPerMile];
};

function fareEstimator(rideTime: number,
    rideDistance: number,
    costPerMinuteList: number[],
    costPerMileList: number[]): number[] {

    let fareList: number[] = [];
    costPerMinuteList.forEach((costPerMinute, index) => {
        const costPerMile = costPerMileList[index];
        fareList.push(Number(((costPerMinute * rideTime) + (costPerMile * rideDistance)).toFixed(1)));
    });

    return fareList;
};

let [rideTime, rideDistance, costPerMinute, costPerMile]: any[] = generateInput();
let result = fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile);

console.log("Ride Time: ", rideTime);
console.log("Ride Distance: ", rideDistance);
console.log("Cost Per Minute: ", costPerMinute);
console.log("Cost Per Mile: ", costPerMile);
console.log("Fare: ", result);