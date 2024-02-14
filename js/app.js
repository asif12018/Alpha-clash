
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //get expected key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    // checked matched or not
    if(playerPressed === expectedAlphabet){
        //update score:
        const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        //-----------------------------------//

        const currentScore = getTextElementValueBy('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score',newScore)
        currentScoreElement.innerText = newScore;
        //start a new round
        continueGame();
        removeBackgroundColorById(expectedAlphabet);
    }else{
        const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        const currentLife = getTextElementValueBy('current-life')
        const newLife = currentLife - 1;
        setTextElementValueById('current-life',newLife)
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup',handleKeyboardKeyUpEvent);
//starting home code:
function continueGame(){
   const alphabet = getARandomAlphabet();
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;
   

   setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('home')
    showElementById('play-ground');
    continueGame();
}
