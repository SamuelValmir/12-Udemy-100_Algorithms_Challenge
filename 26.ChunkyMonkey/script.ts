export {};

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

class Board {
    board: string[][] = [];

    constructor() {
        this.makeBoard();
    };

    private makeBoard(): void {
        let board = this.board;

        // It returns a matrix 8x8 filled with zeros
        let white = "0";
        let black = "1";
        let color1: string;
        let color2: string;
        for (let i = 0; i < 8; i++) {
            if (i % 2 === 0) {
                color1 = white;
                color2 = black;
            } else {
                color1 = black;
                color2 = white;
            }
            board.push([...Array(8)].map((_, i) => {
                return i % 2 === 0 ? color1 : color2;
            }));
        };
    };
    
    public chessBoardCellColor(cell1: string, cell2: string): boolean {       
        // It transforms chess notation to array notation
        const cell1Column = cell1.charCodeAt(0) - 97;
        const cell1Row = 8 - parseInt(cell1.charAt(1));
        const cell2Column = cell2.charCodeAt(0) - 97;
        const cell2Row = 8 - parseInt(cell2.charAt(1));

        return this.board[cell1Row][cell1Column] === this.board[cell2Row][cell2Column]
    };

};

function generateCoordinates(): string[] {
    let row: string;
    let column: string;
    let coordinates: string[] = [];
    
    let a = true;
    do{
        coordinates = [];
        for (let i = 0; i < 2; i++) {
            
            row = (Math.floor(Math.random() * (9 - 1) + 1)).toString();
            column = letters[Math.floor(Math.random() * 8)];
            
            coordinates.push(column.concat(row));
        } 

    } while (coordinates[0] === coordinates[1]);

    return coordinates;
};

let coordinates: string[] = generateCoordinates();
let board = new Board();
let result = board.chessBoardCellColor(coordinates[0], coordinates[1]);

console.log("Coordinates: ", coordinates);
console.log("Same Color: ", result);
