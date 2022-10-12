// html Elements
const startCall = document.querySelector('.startCall');
const firstVideo = document.querySelector('.firstVideo');
const correctVideo = document.querySelector('.correctVideo');
const wrongVideo = document.querySelector('.wrongVideo');
const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const tryAgain = document.querySelector('.try');
const label = document.querySelector('label');

//events
startCall.addEventListener('click', ()=>{
    firstVideo.classList.remove('off')
    input.classList.remove('off')
    submit.classList.remove('off')
    startCall.classList.add('off')
    label.classList.remove('off')
})

submit.addEventListener('click', ()=>{
    const code = input.value;
    startCall.classList.add('off')
    firstVideo.classList.add('off')
    label.classList.add('off')
    input.classList.add('off')
    submit.classList.add('off')
    firstVideo.pause();
    if(parseInt(code) === 1394){
        wrongVideo.pause();
        wrongVideo.classList.add('off') 
        correctVideo.classList.remove('off')
        
    }
    else
    {
        label.classList.add('off')
        wrongVideo.classList.remove('off') 
        tryAgain.classList.remove('off') 

    }
})

tryAgain.addEventListener('click', ()=>{
    label.classList.remove('off')
    input.classList.remove('off')
    input.value = ''
    submit.classList.remove('off')
    tryAgain.classList.add('off') 
})