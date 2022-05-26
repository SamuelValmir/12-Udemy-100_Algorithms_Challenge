

function generateArmStrength(): number[] {
    let armStrengthList: number[] = [];

    for (let i = 0; i < 4; i++) {
        let armStrength = Math.floor(Math.random() * 21);
        armStrengthList.push(armStrength);
    };

    return armStrengthList;
};

function getAreEquallyStrong(
    people1LeftArmStrength: number,
    people1RightArmStrength: number,
    people2LeftArmStrength: number,
    people2RightArmStrength: number): boolean {

    let people1StrongestArm = people1LeftArmStrength >= people1RightArmStrength? people1LeftArmStrength : people1RightArmStrength;
    let people1WeakestArm = people1LeftArmStrength <= people1RightArmStrength? people1LeftArmStrength : people1RightArmStrength;

    let people2StrongestArm = people2LeftArmStrength >= people2RightArmStrength? people2LeftArmStrength : people2RightArmStrength;
    let people2WeakestArm = people2LeftArmStrength <= people2RightArmStrength? people2LeftArmStrength : people2RightArmStrength;


    return people1StrongestArm === people2StrongestArm && people1WeakestArm === people2WeakestArm;
};

let armStrengthList: number[] = generateArmStrength();
let areEquallyStrong = getAreEquallyStrong(armStrengthList[0], armStrengthList[1], armStrengthList[2], armStrengthList[3]);

console.log("People 1 Left Arm Strength: ", armStrengthList[0]);
console.log("People 1 Right Arm Strength: ", armStrengthList[1]);
console.log("People 2 Left Arm Strength: ", armStrengthList[2]);
console.log("People 2 Right Arm Strength: ", armStrengthList[3]);
console.log("Are Equally Strong: ", areEquallyStrong);
                         