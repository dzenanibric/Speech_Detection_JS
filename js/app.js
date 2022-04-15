const mic_start = document.querySelector('.voice__btn-icon'),
text_output_area = document.querySelector('.text__container');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
text_output_area.appendChild(p);

mic_start.addEventListener('click', ()=>{
    if(mic_start.classList.contains('active')){
        stop_btn.classList.add('active');
        mic_start.classList.remove('active');
    }

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        const poop_script = transcript.replace(/poop|poo|shit|dump/gi, '💩');
        p.textContent = poop_script;

        if(e.results[0].isFinal){
            p = document.createElement('p');
            text_output_area.appendChild(p);
        }
    });

    recognition.addEventListener('end', recognition.start);
    
    recognition.start();

    mic_start.style.background = 'red';
});