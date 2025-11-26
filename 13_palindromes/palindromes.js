const palindromes = function (word) {

    //declarations
    let halfwayPoint;
    let evenFlag;
    let wordStack = [];
    let palindromeFlag = false;
    let middleReached = false;

    //splitting the word into an array of characters, skipping spaces
    const wordLetters = word.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    
    const wordSplit = wordLetters.split('');
    // .filter(char => char !== ' ');
    

    //finding length of word
    const wordLength = wordSplit.length;
    
    //finding halfway point of the word
    if (wordLength % 2 == 0) {
        halfwayPoint = wordLength / 2;
        evenFlag = true;
    } else {
        halfwayPoint = (wordLength + 1) / 2;
        evenFlag = false;
    }

    //loading up the stack with the first half of the word
    for (let i = 0; i < halfwayPoint; i++) {
        wordStack[i] = wordSplit[i];

        if (i == halfwayPoint - 1) {
            
            let j = i;

            if (evenFlag == false) {
                j--;
            }

            for (let h = i + 1; h < wordLength; h++) {
                
                if (wordSplit[h] != wordStack[j]) {
                    console.log("false");
                    return false;
                } else if(j > 0) {
                    j--;                
                } else {
                    console.log("true");
                    return true;
                }
            }
        }
    }
};

// Do not edit below this line
module.exports = palindromes;

