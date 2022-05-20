function generateSequence(): number[] {
    let sequence: number[] = [];
    let sequenceLength: number = Math.floor(Math.random() * (106 - 2) + 2);

    for (let index = 0; index < sequenceLength; index++) {
        sequence.push(Math.floor(Math.random() * (106 + 105) - 105));
    }
    return sequence;
}

function isAlmostIncreasingSequence(sequence: number[]): boolean {
    let almostIncreasingSequence: boolean = false;
    let sequenceWithOneRemovedList: number[] = getSequencesWithOneRemoved(sequence);

    sequenceWithOneRemovedList.forEach(sequenceWithOneRemoved => {
        let increasingSequence = true;
        let increasingSequencePair: boolean;

        for (let index = 0; index < sequenceWithOneRemoved.length - 1; index++) {
            increasingSequencePair = sequenceWithOneRemoved[index] < sequenceWithOneRemoved[index + 1];
            increasingSequence = increasingSequence && increasingSequencePair
        }

        if (increasingSequence) {
            almostIncreasingSequence = true
        }
    });

    return almostIncreasingSequence;
}

function getSequencesWithOneRemoved(sequence): number[] {
    let randomPos: number = Math.floor(Math.random() + sequence.length);
    let sequenceWithOneRemovedList = [];
    for (let i = 0; i < sequence.length; i++) {
        let sequenceWithOneRemoved = sequence.filter((_element, index) => index !== i);
        sequenceWithOneRemovedList.push(sequenceWithOneRemoved);
    }

    return sequenceWithOneRemovedList;
}
                                                          
let sequence: number[] = generateSequence();

console.log("Inputted Array = ", sequence);
console.log("Is Almost Increasing Sequence = ", isAlmostIncreasingSequence(sequence));
