// html Elements
const startCall = document.querySelector('.startCall');
const firstVideo = document.querySelector('.firstVideo');
const correctVideo = document.querySelector('.correctVideo');
const wrongVideo = document.querySelector('.wrongVideo');
const input = document.querySelector('input');
const submit = document.querySelector('.submit');

//events
startCall.addEventListener('click', ()=>{
    firstVideo.classList.remove('off')
    input.classList.remove('off')
    submit.classList.remove('off')
    startCall.classList.add('off')
})

submit.addEventListener('click', ()=>{
    const code = input.value;
    startCall.classList.add('off')
    firstVideo.classList.add('off')
    input.classList.add('off')
    submit.classList.add('off')
    firstVideo.pause();
    if(parseInt(code) === 1394){
   
        correctVideo.classList.remove('off')
        
    }
    else
    {
     
        wrongVideo.classList.remove('off') 
    }
})