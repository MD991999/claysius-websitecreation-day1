



function validateEmail() {
    const inputEmail = document.getElementById("inputEmail")
    console.log(inputEmail.value);
    const inputEmailError = document.getElementsByClassName("validateEmailError")[0]
    // In the validateEmail function, you are using getElementsByClassName to retrieve the error span element, which returns a collection of elements. To set the error message, you need to access the first element of the collection.
    // By adding [0] after getElementsByClassName("validateEmailError"), you ensure that you are accessing the first element of the collection. 

    console.log(inputEmailError);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail.value.trim() === "") {
        inputEmailError.textContent = "Username is required"
        console.log(inputEmailError.textContent);
    }
    else if (!emailPattern.test(inputEmail.value.trim())) {
        inputEmailError.textContent = "Invalid Email"

    }
    else {
        inputEmailError.textContent = ""
    }
}
function validatePassword() {
    const inputPswd = document.getElementById("inputPswd")
    console.log(inputPswd.value);
    const inputPswdError = document.getElementsByClassName("validatePswdError")[0]
    console.log(inputPswdError);

    const min8 = /.{8,}/   // min 8 characters

    const capitalLetter = /[A-Z]/  // atleast one capital letter

    const smallLetter = /[a-z]/  // atleast on small letter

    const number = /[0-9]/      // atleast one number
    const symbolRegex = /[!@#$%^&*]/; // At least one symbol
    if (inputPswd.value === "") {
        inputPswdError.innerHTML = "Password is required"
        // console.log(inputEmailError.textContent);
    }
    else if (!min8.test(inputPswd.value)) {
        inputPswdError.innerHTML = "Minimum 8 character is required"

    }
    else if (!capitalLetter.test(inputPswd.value)) {
        inputPswdError.innerHTML = "atleast one capital letter is required"

    }
    else if (!smallLetter.test(inputPswd.value)) {
        inputPswdError.innerHTML = "atleast on small letter is required"

    }
    else if (!number.test(inputPswd.value)) {
        inputPswdError.innerHTML = "atleast one number is required"

    }
    else if (!symbolRegex.test(inputPswd.value)) {
        inputPswdError.innerHTML = "atleast one symbol is required"

    }

    else {
        inputPswdError.innerHTML = ""
    }

}
