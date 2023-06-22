//username validation
function validateEmail(){
    let username=document.getElementById('inputEmail')
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(username.value.trim()===""){
        displayerror(username,"Field is required")
    }
    else if(!emailPattern.test(username.value.trim())){
        displayerror(username,"Not a valid email")
    }
    else{
        displaysuccess(username)
    }
}

//password validation
function validatePassword(){
    let password=document.getElementById('inputPswd')
    const min8 = /.{8,}/   // min 8 characters

    const capitalLetter = /[A-Z]/  // atleast one capital letter

    const smallLetter = /[a-z]/  // atleast on small letter

    const number = /[0-9]/      // atleast one number
    const symbolRegex = /[!@#$%^&*]/; // At least one symbol
    if(password.value.trim()===""){
        displayerror(password,"Field is required")
    }
    else if (!min8.test(password.value.trim())) {
        displayerror(password, "Password must have a minimum of 8 characters");
    } else if (!capitalLetter.test(password.value.trim())) {
        displayerror(password, "Password must contain at least one capital letter");
    } else if (!smallLetter.test(password.value.trim())) {
        displayerror(password, "Password must contain at least one small letter");
    } else if (!number.test(password.value.trim())) {
        displayerror(password, "Password must contain at least one number");
    } else if (!symbolRegex.test(password.value.trim())) {
        displayerror(password, "Password must contain at least one symbol");
    } 
    else{
        displaysuccess(password)
    }
}

//errror display
function displayerror(input,message){
let button=document.getElementById('button');
const formcontrol=input.parentElement;
const span=formcontrol.querySelector('span')
span.className="spanshown"
span.innerText=message;
button.disabled=true;
}

//success display
function displaysuccess(input){
    let button=document.getElementById('button');
    const formcontrol=input.parentElement;
    const span=formcontrol.querySelector('span')
    span.className="spanhidden"
    span.innerText="";
  button.disabled=false;
    }
    