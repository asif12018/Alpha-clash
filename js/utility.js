function hideElementById(element){
    document.getElementById(element).classList.add('hidden');
}

function showElementById(element){
    document.getElementById(element).classList.remove('hidden');
}


function setBackgroundColorById(elementbyId){
    const element = document.getElementById(elementbyId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementById){
    const element = document.getElementById(elementById);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'qwertyuiopasdfghjklzxcvbnm/';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 26;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet
}


function getTextElementValueBy(elementId){
    const element =document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
