export { };

const fanciestCarList = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

function generateInput(): any[] {
    const rideLength = Math.floor(Math.random() * (31 - 4) + 4);
    const fares: number[] = [];

    for (let i = 0; i < 5; i++) {
        fares.push(Number((Math.random() * (5 - 0.3) + 0.3).toFixed(1)));
    };

    return [rideLength, fares.sort()];
};

function fancyRide(rideLength: number, fares: number[]): string {
    let fanciestCar = "No one";

    fares.forEach((fare, index) => {
        const cost = fare * rideLength;
        if (cost < 20) {
            fanciestCar = fanciestCarList[index];
        };
    });

    return fanciestCar;
};

let [rideLength, fares]: any[] = generateInput();
let result = fancyRide(rideLength, fares);

console.log("RideLength: ", rideLength);
console.log("Fares: ", fares);
console.log("Factorial: ", result);