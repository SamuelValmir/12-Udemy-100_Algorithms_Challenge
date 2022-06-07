function generateImage(): number[][] {
    const imageLength = Math.floor(Math.random() * (11 - 3) + 3);

    let image = [...Array(imageLength)].map((_, idx) => {
        let row = [];
        let maxPixel: number;
        let minPixel: number;

        if (idx === 0) {
            maxPixel = 11;
            minPixel = 3;
        } else {
            maxPixel = 256;
            minPixel = 0;
        };

        for (let i = 0; i < imageLength; i++) {
            let imagePixel = Math.floor(Math.random() * (maxPixel - minPixel) + maxPixel);
            row.push(imagePixel);
        };

        return row;
    });

    return image;
};

function boxBlur(image: number[][]): number[][] {
    let rowLength = image.length;

    // It creates a empty matrix to be filled with the blurred pixels
    let blurredImage: number[][] = [...Array(rowLength - 2)].map(() => []);

    for (let i = 0; i < rowLength - 2; i++) {
        let min = 0;
        let max = 3;

        for (let j = 0; j < rowLength - 2; j++) {
            let a = (image[i].slice(min, max)).reduce((acc, next) => acc + next);
            let b = (image[i + 1].slice(min, max)).reduce((acc, next) => acc + next);
            let c = (image[i + 2].slice(min, max)).reduce((acc, next) => acc + next);

            blurredImage[i][j] = Math.floor((a + b + c) / 9);
            min++
            max++
        };

    };

    return blurredImage;
};

let image: number[][] = generateImage();
let result = boxBlur(image);

console.log("Coordinates: ", image);
console.log("Blurred Image: ", result);
