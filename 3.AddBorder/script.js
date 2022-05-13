// let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"];
alphabet.shuffle = shuffle;

function shuffle() {
    for (let index = (this.length - 1); index >= 0; index--) {
        let randomPosition = Math.floor(Math.random() * index);
        [this[index], this[randomPosition]] = [this[randomPosition], this[index]];
    }
}

function generateRectangular(list) {
    let rectangular = [];
    for (let index = 0; index < list.length; index += 3) {
        let triple = list.slice(index, index + 3);
        triple = triple.join(""); // Example of output ["abc", "def", "ghi",...]
        rectangular.push(triple);

    }

    return rectangular;

}

function addBorder(picture) {

    picture = picture.map(element => "*".concat(element, "*"));
    picture.unshift("*****");
    picture.push("*****");
    return picture;
}


alphabet.shuffle();
let rectangular = generateRectangular(alphabet);

console.log("Rectangular Without Borders = ", rectangular);
console.log("Rectangular With Borders = ", addBorder(rectangular));
