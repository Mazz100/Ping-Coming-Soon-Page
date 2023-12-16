// Storing DOM in const
const form = document.getElementById('emailForm');
const email = document.getElementById('email');
const errormsg = email.nextElementSibling;

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener('load', () => {

    //Testing the inputfield if its empty | if not empty check for correct email formatting
    const isValid = email.value === 0 || emailRegex.test(email.value);
    //Condition context: if isValid true then valid else invalid
    email.className = isValid ? "valid" : "invalid";

});

//Check for user input if not empty or has required regex then remove errormsg
email.addEventListener('input', () => {
    const isValid = email.value.length === 0 || emailRegex.test(email.value);
    if (isValid) {
        email.className = "valid";
        errormsg.textContent = "";
    }
    else {
        errormsg.textContent = 'Please provide a valid email address';
        errormsg.style.color = 'red';
    }


});

//Submit button checks for entred format if valid or invalid thne proceeds
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = email.value === 0 || emailRegex.test(email.value);

    if (!isValid) {
        errormsg.textContent = 'Please provide a valid email address';
        

    }
    else {
        errormsg.textContent = 'An email has been sent to you, thanks for submitting';
        errormsg.style.color = 'green';
        
    }
});


