// function play(){
//     const homeSection=document.getElementById('home-section')
//     homeSection.classList.add('hidden')
//     const playingField =document.getElementById('playing-section')
//     playingField.classList.remove('hidden')
// }
function continuePlay(){
    const alphabet = getARandomAlphabet()
    console.log(alphabet)

    const displayText=document.getElementById('display-text')
    displayText.innerText =alphabet;

    setBackgroundColor(alphabet)
}

function play(){
    hideASection('home-section')
    addASection('playing-section')
    continuePlay()
}