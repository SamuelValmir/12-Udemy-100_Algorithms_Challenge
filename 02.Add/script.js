function generateParams(paramsNumber){
    let paramList = [];

    for (let index = 0; index < paramsNumber; index++) {
        let param = Math.floor(Math.random() * (1001 - (-100) - (-100)))
        paramList.push(param);
               
    }

    return paramList;
}

function add([...params]){
    let sum = params.reduce((total, element) => total + element)

    return sum;
}

let param = generateParams(10);

console.log("Params List = ", param);
console.log("Params Sum = ", add(param));