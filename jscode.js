// Storing DOM in const
const form = document.querySelector('#emailForm');
const emailInput = document.getElementById('email');
const msgText = document.getElementById('msg');
const btnAction = document.querySelector('.notify-btn');

btnAction.addEventListener('click', onSubmit => {

    if (emailInput.value == '' || emailInput.value.trim() === '') {
        msgText.innerHTML = 'Please provide a valid email address';
        emailInput.classList.add('redBox');
    }

    else{
        msgText.innerHTML = 'An email has been sent to you, thanks for submiting';
        msgText.style.color = 'green';
        emailInput.classList.remove('redBox');
    }

})

