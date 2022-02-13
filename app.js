function numGenerate() {
    const randomNum = Math.round(Math.random() * 10000);
    const checkLength = randomNum + ''; 
    if (checkLength.length == 4) {
        const randomValue = document.getElementById('random-input');
        randomValue.value = randomNum;
    }
    else {
        numGenerate();
    }
};

document.getElementById('dial-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const dialInput = document.getElementById('dial-input');
    if(isNaN(number)) {
        if(number == 'C'|| number == '<') {
            dialInput.value = '';
        }
    }
    else {
       dialInput.value += number; 
    }
    
});

function checkSimilar() {
    const randomValue = document.getElementById('random-input');
    const dialInput = document.getElementById('dial-input');
    const error = document.getElementById('match-error');
    const success = document.getElementById('match-success');
    if (randomValue.value == dialInput.value) {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
    randomValue.value = '';
    dialInput.value = '';
   
};

