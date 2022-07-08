export { };

function generateInput(): any[] {
    const votes: number[] = []
    const votesLength = Math.floor(Math.random() * 105);
    const k = Math.floor(Math.random() * 105);

    for (let i = 0; i < votesLength; i++) {
        const randomNumber = Math.floor(Math.random() * (105 - 4) + 4);
        votes.push(randomNumber);
    };
    
    return [votes, k];
};

function electionsWinners(votes: number[], remainingCandidates: number): number {
 
    let winnersNumber = 0;
    votes.forEach(vote=>{
        if(checkIfCanWin(vote)){
            winnersNumber++
        }
    });

    function checkIfCanWin(vote:number){
        let canWin = true;
        const finalVote = vote + remainingCandidates;
        if(votes.includes(finalVote)){
            canWin = false;
        }

        return canWin
    }

    return winnersNumber;
};

let [votes, k]: any[] = generateInput();
let result = electionsWinners(votes, k);

console.log("Votes: ", votes);
console.log("K: ", k);
console.log("Number of winners: ", result);