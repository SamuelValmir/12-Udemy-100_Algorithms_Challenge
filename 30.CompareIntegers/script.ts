export { };

function generateInput(): string[] {
    let integers:string[] = [];

    for (let i = 0; i < 2; i++) {
        let integer = Math.floor(Math.random() * (11 - 1) + 1);

        integers.push(integer.toString());
    };

    return integers;
};

function compareIntegers(a:string, b:string): string[] {
    let aNumber = parseInt(a);
    let bNumber = parseInt(b);

    let result = "";
    let phrase = "then";

    if(aNumber < bNumber){
        result = "less";
    } else if(aNumber > bNumber){
        result = "greater";
    } else{
        result = "equal";
        phrase = "to";
    }

    return [result, phrase];
};

let integers:string[] = generateInput();
let result = compareIntegers(integers[0], integers[1]);

console.log("Integers ", integers);
console.log(`${integers[0]} is ${result[0]} ${result[1]} ${integers[1] }.`);
        