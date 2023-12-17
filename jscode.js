// Storing DOM in const
const form = document.getElementById('emailForm');
const email = document.getElementById('email');
const inputBorder = document.querySelector('input');
const errormsg = email.nextElementSibling;
const textmsg = errormsg.nextElementSibling;

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Check for user input if not empty or has required regex then remove errormsg
email.addEventListener('input', () => {
    const isValid = email.value.length === 0 || emailRegex.test(email.value);
    if (isValid) {
        errormsg.textContent = '';
        inputBorder.style.borderColor = ' hsl(223, 100%, 88%)';
    }
    else {
        //Checks and returns if input is valid after submitting form
       return isValid;
    }


});

//Submit button checks for entred format if valid or invalid thne proceeds
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = email.value === 0 || emailRegex.test(email.value);

    if (!isValid) {
        inputBorder.style.borderColor = ' hsl(354, 100%, 66%)';
        errormsg.textContent = 'Please provide a valid email address';
    }
    else {
        inputBorder.style.borderColor = ' hsl(223, 100%, 88%)';
        errormsg.textContent = '';
        textmsg.textContent = 'An email has been sent to you, thanks for submitting';

    }
});


