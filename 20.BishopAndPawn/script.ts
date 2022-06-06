let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

class Board {
    board: string[][] = [];
    bishopColumn: number;
    bishopRow: number;
    pawnColumn: number;
    pawnRow: number;

    constructor(bishopCoordinates: string, pawnCoordinates: string) {

        // It transforms chess notation to array notation
        this.bishopColumn = bishopCoordinates.charCodeAt(0) - 97;
        this.bishopRow = 8 - parseInt(bishopCoordinates.charAt(1));
        this.pawnColumn = pawnCoordinates.charCodeAt(0) - 97;
        this.pawnRow = 8 - parseInt(pawnCoordinates.charAt(1));

        this.makeBoard();
    };

    private makeBoard(): void {
        let board = this.board;

        // It returns a matrix 8x8 filled with zeros
        for (let i = 0; i < 8; i++) {
            board.push([...Array(8)].map(() => "0"));
        };

        board[this.bishopRow][this.bishopColumn] = "b";
        board[this.pawnRow][this.pawnColumn] = "p";

        /* EXAMPLE OF THE GENERATE MATRIX
            0 - Empty space
            1 - Spaces the bishop can move
            b - Bishop
            p - pawn
            
            0 0 0 1 0
            1 0 1 0 0
            0 b 0 0 p
            1 0 1 0 0
            0 0 0 1 0
        */
    };

    canBishopCapturePawn(): boolean {
        let canBishopCapturePawn = false;

        if (this.tryNextPossibleMove(1, 1) === true) {
            return true;
        };

        if (this.tryNextPossibleMove(1, -1) === true) {
            return true;
        };

        if (this.tryNextPossibleMove(-1, 1) === true) {
            return true;
        };

        if (this.tryNextPossibleMove(-1, -1) === true) {
            return true;
        };

        return canBishopCapturePawn;
    };

    private tryNextPossibleMove(indexRow: number, indexColumn: number): boolean {
        try {

            // It fills with "1" the empty spaces or return true if pawn is on the way;
            while (this.board[this.bishopRow + indexRow][this.bishopColumn + indexColumn] !== undefined) {
                if (this.board[this.bishopRow + indexRow][this.bishopColumn + indexColumn] === "p") {
                    return true;
                }
                this.board[this.bishopRow + indexRow][this.bishopColumn + indexColumn] = "1";
                if (indexRow > 0) indexRow++;
                else indexRow--;
                if (indexColumn > 0) indexColumn++;
                else indexColumn--;
            };
        } catch (_) { };
    };
};

function generateBishopAndPawnCoordinates(): string[] {
    const bishopRow = (Math.floor(Math.random() * (9 - 1) + 1)).toString();
    const bishopColumn = letters[Math.floor(Math.random() * 8)];
    let pawnRow = (Math.floor(Math.random() * (9 - 1) + 1)).toString();
    let pawnColumn = letters[Math.floor(Math.random() * 8)];

    let bishopCoordinate = bishopColumn.concat(bishopRow);
    let pawnCoordinate = pawnColumn.concat(pawnRow);

    while (bishopCoordinate === pawnCoordinate) {
        pawnRow = (Math.floor(Math.random() * 8)).toString();
        pawnColumn = letters[Math.floor(Math.random() * 8)];
        pawnCoordinate = pawnColumn.concat(pawnRow);
    };

    return [bishopCoordinate, pawnCoordinate];
};

let coordinates: string[] = generateBishopAndPawnCoordinates();
let board = new Board(coordinates[0], coordinates[1]);
let result = board.canBishopCapturePawn();

console.log("Coordinates: ", coordinates);
console.log("Can Bishop Capture Pawn: ", result);
