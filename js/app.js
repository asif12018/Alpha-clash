
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //stop game

    if(playerPressed === 'Escape'){
        gameOver();
    }
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
        setTextElementValueById('current-life',newLife);

        if(newLife === 0){
            gameOver();
        }
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
    //hide every thing show only play-ground

    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life',3);
    setTextElementValueById('current-score',0);

    continueGame();
   
}

function gameOver(){
      hideElementById('play-ground');
      showElementById('final-score');
      //update final score
        const lastScore = getTextElementValueBy('current-score');
        setTextElementValueById('game-score',lastScore);

        // clear the last selected alphabet

        const alphabet = getElementTextById('current-alphabet');
        removeBackgroundColorById(alphabet);

}
