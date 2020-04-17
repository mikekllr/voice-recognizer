


const button = document.getElementById('startButton');
const contend = document.getElementById('contend');
let finishedText = '';

document.addEventListener('DOMContentLoaded', () => {




try {

    if(window.webkitSpeechRecognition ) {

        window.SpeechRecognition = window.webkitSpeechRecognition;

    }

    if ('SpeechRecognition' in window) {
        // speech recognition API supported
      } else {
        // speech recognition API not supported
        alert('wont work here');
      }


    const recognition = new window.SpeechRecognition();
    recognition.lang = window.navigator.language;
    recognition.interimResults = true;

    console.log(window.navigator.language);

    recognition.onstart = () => {
        console.log('voice is activated braaaa');
        button.classList.add('icon-red');
        
    }

    recognition.addEventListener('result', e => {

      finishedText = e.results[0][0].transcript;
      contend.innerText = finishedText;
      console.log(e);

    });

  

    recognition.onspeechend = () => {
      recognition.stop();
      button.classList.remove('icon-red');
      
    }


    button.addEventListener('click', () => {
        recognition.start();
      
      
    });

} catch(e) {

    alert(e);
    alert('something went wrong :(');

}

});