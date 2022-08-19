export { };

const characters = ["<", ">", "[", "]", ",:", ",", ";", "@", "\\", "\"", "!", "#", "$", "%", "&", "*", "+", "-", "/", "=", "?", "^", "_", "{", "}", "|", " ", "~", ".", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generateInput(): string {
    const addressLength = Math.floor(Math.random() * (51 - 10) + 10);
    let address: string = "";

    for (let i = 0; i < addressLength; i++) {
        const characterPos = Math.floor(Math.random() * characters.length)
        const character = characters[characterPos];

        address += character;
    };

    return address + "@example.com";
};

function findEmailDomain(address: string): string {
    return address.substring(address.lastIndexOf("@"));
};

const address: string = generateInput();
const result = findEmailDomain(address);

console.log("Address: ", address);
console.log("Result: ", result);