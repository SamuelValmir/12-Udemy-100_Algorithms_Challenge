function generateArray(): number[] {
    let length: number = Math.floor(Math.random() * (11 - 2) + 2);
    let array: number[] = [];
    for (let index = 0; index < length; index++) {
        array.push(Math.floor(Math.random() * (1001 - (-1000)) + (-1000)))
    }
    return array;
}

function adjacentElementProduct(array: number[]): object {

    let productObject = {
        largestProduct: array[0] * array[1],
        products: [array[0], array[1]]
    };

    let largestProduct = productObject.largestProduct;

    for (let index = 0; index < array.length - 1; index++) {
        let product = array[index] * array[index + 1];
        if (product > largestProduct) {
            largestProduct = product;
            productObject.products = [array[index], array[index + 1]]
        };
    };

    return productObject;
}

let array: number[] = generateArray();

console.log("Array = ", array);
console.log("Largest Product and pair of adjacent elements = ", adjacentElementProduct(array));
