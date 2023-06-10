// 
const inputTags = document.getElementsByClassName("inputTag")
console.log(inputTags);

// give onfocusout validation to each input fields
for (let i = 0; i < inputTags.length; i++) {
  inputTags[i].addEventListener("focusout", function () {
    // logic
    if (this.value.trim() === "") {
      this.nextElementSibling.textContent = "Field is required";
    }
    else {
      this.nextElementSibling.textContent = "";
    }
  })
}

// permanent address logic
const inputAddress = document.getElementsByClassName("inputTagAddress")[0]

console.log(inputAddress);

function validateAddress(element)
// The element parameter is added to the validateAddress function to receive the reference to the specific input field that triggered the onfocusout event.
{
  if (element.value.trim() === "") {
    element.nextElementSibling.textContent = "Field is required";

  }
  else {
    element.nextElementSibling.textContent = "";

  }
}

// gender

function validateRadio() {
  const radios = document.getElementsByName("gender")
  const errorSpan = document.querySelector(".validateRadioError");
  console.log(radios);
  let checked = false

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    errorSpan.textContent = "Please select a gender.";
  } else {
    errorSpan.textContent = "";
  }
}

// dropdown validation
// JavaScript
function validateDropdownState() {
  const dropdown = document.getElementById("state");
  const errorSpan = document.querySelector(".validateDropdownErrorState");

  if (dropdown.value === "") {
    errorSpan.textContent = "Please select a state.";
  } else {
    errorSpan.textContent = "";
  }
}

function validateDropdownCity() {
  const dropdown = document.getElementById("city");
  const errorSpan = document.querySelector(".validateDropdownErrorCity");

  if (dropdown.value === "") {
    errorSpan.textContent = "Please select a state.";
  } else {
    errorSpan.textContent = "";
  }
}
// logic to calculate the age 
function ageCalculation() {
  const dob = document.getElementById("dob");
  const age = document.getElementById("age");
  const dateOfBirth = new Date(dob.value);
  const presentDate = new Date();
  let realAge = presentDate.getFullYear() - dateOfBirth.getFullYear();

  if (
    dateOfBirth.getMonth() > presentDate.getMonth() ||
    (dateOfBirth.getMonth() === presentDate.getMonth() &&
      dateOfBirth.getDate() > presentDate.getDate())
  ) {
    realAge--;
  }

  age.value = realAge;
}

// logic for dropdown part

function populateDistricts() {
  const stateSelector = document.getElementById("state");
  const districtSelector = document.getElementById("city");
  const selectedState = stateSelector.value;

  // clear existing options
  districtSelector.innerHTML = '<option value="" selected disabled>Select your city</option>';

  if (selectedState === 'Kerala') {
    populateKeralaDistricts();

  }
  else if (selectedState === 'Karnataka') {
    populateKarnatakaDistricts()
  }
  else if (selectedState === 'TamilNadu') {
    populateTamilDistricts()
  }
}

function populateKeralaDistricts() {
  const districtSelector = document.getElementById("city");
  const keralaDistricts = ["Thrissur", "Wayanad", "Thiruvananthapuram", "Kochi", "Kasargod", "Kannur"];
  // populate options
  keralaDistricts.forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.text = district;
    districtSelector.appendChild(option);
  }
  )
}
function populateKarnatakaDistricts() {
  const districtSelector = document.getElementById("city");
  const karnatakaDistricts = ["Mysuru", "Kodagu", "Mandya", "Hassan", "Benagaluru", "Uduppi"];
  // populate options
  karnatakaDistricts.forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.text = district;
    districtSelector.appendChild(option);
  }
  )
}

function populateTamilDistricts() {
  const districtSelector = document.getElementById("city");
  const TamilDistricts = ["Chennai", "Coimbatore", "Cuddalore", "Erode", "Kanchipuram", "Madurai"];
  // populate options
  TamilDistricts.forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.text = district;
    districtSelector.appendChild(option);
    //  appendChild is a method used to append or add a child element to a parent element. It is commonly used to dynamically add elements to the DOM (Document Object Model) tree. 
  }
  )
}
// mobile validation
function validateMobile() {
  const inputMob = document.getElementById("inputmob")
  const validateMobileError = document.getElementsByClassName("validateMobileError")[0]
  if (inputMob.value.trim() === "") {
    validateMobileError.textContent = "Mobile Number is required"
  }
  else if (!inputMob.checkValidity())
  // It also uses the checkValidity() method to verify if the entered value matches the specified pattern ([0-9]{10}) for a 10-digit mobile number.
  {
    validateMobileError.textContent = "Invalid mobile number.";
  } else {
    validateMobileError.textContent = "";
  }
}

// email-validation
function validateEmail() {
  const inputEmail = document.getElementById("inputEmail");
  const errorSpan = document.getElementsByClassName("validateEmailError")[0];
  const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputEmail.value.trim() === "") {
    errorSpan.textContent = "Email address is required.";
  } else if (!emailpattern.test(inputEmail.value.trim()))
  //   The test method is used to test if a string matches a regular expression. It returns true if the pattern is found in the string, and false otherwise.
  {
    errorSpan.textContent = "Invalid email address.";
  } else {
    errorSpan.textContent = "";
  }
}

function validatePswd() {
  const inputPswd = document.getElementById("inputPswd")
  console.log(inputPswd.value);
  const inputPswdError = document.getElementsByClassName("inputPswdError")[0]
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




