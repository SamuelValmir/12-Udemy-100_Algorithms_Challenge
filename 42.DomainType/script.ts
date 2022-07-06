export { };

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const domainTypes = [".org", ".com", ".net", ".info"];

function generateInput(): string[] {
    const domains: string[] = []
    const domainsLength = Math.floor(Math.random() * (26 - 4) + 4);

    for (let i = 0; i < domainsLength; i++) {
        domains.push(getDomain());
    };

    return domains;
};

function getDomain(): string {
    let string = "";
    const stringLength = Math.floor(Math.random() * (21 - 5) + 5);

    for (let i = 0; i < stringLength; i++) {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        string += randomLetter;
    };

    const domainType = domainTypes[Math.floor(Math.random() * domainTypes.length)];

    return string.concat(domainType);
};

function domainType(domains: string[]): string[] {
    const domainsDescription = {
        ".org": "organization"
        , ".com": "commercial"
        , ".net": "network"
        , ".info": "information"
    };

    let domainsType: string[] = domains.map((domain: string): string => {
        const splitPos: number = domain.lastIndexOf(".");
        const domainType: string = domain.substring(splitPos);

        return domainsDescription[domainType]
    });


    return domainsType;
};

let domains: string[] = generateInput();
let result = domainType(domains);

console.log("Domains: ", domains);
console.log("Domains Type: ", result);