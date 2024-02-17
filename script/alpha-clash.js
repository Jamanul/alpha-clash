// function play(){
//     const homeSection=document.getElementById('home-section')
//     homeSection.classList.add('hidden')
//     const playingField =document.getElementById('playing-section')
//     playingField.classList.remove('hidden')
// }

function handleKeyBoardButtonPress(event) {
    // pressed keyboard
    const playerPressed = event.key;
    console.log(playerPressed)
    // got random alphabet
    const currentAlphabetElement = document.getElementById('display-text')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(playerPressed, expectedAlphabet)
    // condition to match
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');
        removeBackgroundColor(expectedAlphabet);
        continuePlay()
        // const initialScore = document.getElementById('score-update')
        // const scoreCount = initialScore.innerText;
        // const finalScore = parseInt(scoreCount)
        // newScore = finalScore+1;
        // initialScore.innerText= newScore;
        //------------------------------------

        const currentScore = setElementCountById('score-update')
        newScore = currentScore + 1;
        finalElementCountById('score-update',newScore)
    }
    else {
        console.log('you lost a life')
        // const initialLife = document.getElementById('life-update');
        // const lifeCount = initialLife.innerText;
        // const finalLife = parseInt(lifeCount);
        // newLife = finalLife -1;
        // initialLife.innerText = newLife;
        const currentLife = setElementCountById('life-update')
        newLife = currentLife -1;
        finalElementCountById('life-update',newLife)
        if(newLife===0){
            gameOver()
        }
    }
}
document.addEventListener('keyup', handleKeyBoardButtonPress)


function continuePlay() {
    const alphabet = getARandomAlphabet()
    console.log(alphabet)

    const displayText = document.getElementById('display-text')
    displayText.innerText = alphabet;

    setBackgroundColor(alphabet)
}

function play() {
    hideASection('home-section')
    hideASection('score-section')
    addASection('playing-section')
    finalElementCountById('life-update',10)
    finalElementCountById('score-update',0)
    continuePlay()
}

function gameOver(){
    hideASection('playing-section')
    addASection('score-section')

    const finalScore= setElementCountById('score-update')
    finalElementCountById('final-score',finalScore)
    const displayElement = getElementTextById('display-text')
    removeBackgroundColor(displayElement)
}