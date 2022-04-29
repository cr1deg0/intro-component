const form  = document.getElementsByTagName('form')[0];

const firstName = document.getElementById("firstname");
const firstNameLabel = document.getElementById("lbl--firstname");
const firstNameError = document.getElementById("error--firstname");

const lastName = document.getElementById("lastname");
const lastNameLabel = document.getElementById("lbl--lastname");
const lastNameError = document.getElementById("error--lastname");

const email = document.getElementById("email");
const emailLabel = document.getElementById("lbl--email");
const emailError = document.getElementById("error--email");

const password = document.getElementById("password");
const passwordLabel = document.getElementById("lbl--password");
const passwordError = document.getElementById("error--password");

firstName.addEventListener("input", event  => {
    // Make input label acting as placehoder invisible when user starts typing.
    firstNameLabel.style.opacity = 0;
    if (firstName.validity.valid) {
        // If the field is valid remove the error message and styling if present.
        firstNameError.textContent = '';
        firstName.className = "";
    }
    else {
        // If there is an error, show the error message and update styling.
        firstNameError.textContent = "First Name cannot be empty";
        firstName.className = "input-error";
    }
});

lastName.addEventListener("input", event  => {
    // Make input label acting as placehoder invisible when user starts typing.
    lastNameLabel.style.opacity = 0;
    if (lastName.validity.valid) {
        // If the field is valid remove the error message and styling if present.
        lastNameError.textContent = '';
        lastName.className = "";
    }
    else {
        // If there is an error, show the error message and update styling.
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.className = "input-error";
    }
});

email.addEventListener("input", event  => {
    // Make input label acting as placehoder invisible when user starts typing.
    emailLabel.style.opacity = 0;
    if (email.validity.valid) {
        // If the field is valid remove the error message and styling if present.
        emailError.textContent = '';
        email.className = "";
    }
    else {
        // If there is an error, show the error message and update styling.
        emailError.textContent = "Looks like this is not an email";
        email.className = "input-error";
    }
});

password.addEventListener("input", event  => {
    // Make input label acting as placehoder invisible when user starts typing.
    passwordLabel.style.opacity = 0;
    if (password.validity.valid) {
        // If the field is valid remove the error message and styling if present.
        passwordError.textContent = '';
        password.className = "";
    }
    else {
        // If there is an error, show the error message and update styling.
        passwordError.textContent = "Password cannot be empty";
        password.className = "input-error";
    }
});

form.addEventListener('submit', function (event) {
  
    if(!firstName.validity.valid ) {
      // If first name field is not valid,
        firstNameError.textContent = "First Name cannot be empty";
        firstName.className = "input-error";
      // prevent the form from being sent by canceling the event.
      event.preventDefault();
    }
    if(!lastName.validity.valid) {
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.className = "input-error";
        // prevent the form from being sent by canceling the event.
        event.preventDefault();
    }
    if(!email.validity.valid) {
        emailError.textContent = "Looks like this is not an email";
        email.className = "input-error";
        // prevent the form from being sent by canceling the event.
        event.preventDefault();
    }
    if(!password.validity.valid) {
        passwordError.textContent = "Password cannot be empty";
        password.className = "input-error";
        // prevent the form from being sent by canceling the event.
        event.preventDefault();
    }
    // prevent the form being submited after validation.
    return false;
  });