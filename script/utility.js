function hideASection(input) {
    const inputField = document.getElementById(input)
    inputField.classList.add('hidden')
}
function addASection(input) {
    const inputField = document.getElementById(input)
    inputField.classList.remove('hidden')
}

function setBackgroundColor(input) {
    const value = document.getElementById(input);
    value.classList.add('bg-orange-400');
}
function removeBackgroundColor(input) {
    const value = document.getElementById(input);
    value.classList.remove('bg-orange-400')
}

function setElementCountById(elementId) {
    const element = document.getElementById(elementId);
    const updateElement = element.innerText;
    const finalElement = parseInt(updateElement);
    return finalElement;
}

function finalElementCountById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabets = alphabetString.split('')
//     // console.log(alphabetArray)
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber)

//     const alphabet = alphabets[index]
//     return alphabet;
// }

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}