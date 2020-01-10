const nameInput = document.getElementById("empName");
const zipcodeInput = document.getElementById("zipcode");
const emailInput = document.getElementById("empEmail");
const phoneInput = document.getElementById("empPhone");

// Event Lister For The NameInput
nameInput.addEventListener("blur", validatname);

// Event Lister For The ZipcodeInput
zipcodeInput.addEventListener("blur", validatzipcode);

// Event Lister For The EmailInput
emailInput.addEventListener("blur", validatemail);

// Event Lister For The PhoneInput
phoneInput.addEventListener("blur", validatphone);

// Name Field Validation
function validatname() {
  const namere = /^[a-zA-Z]{2,10}$/;

  if (!namere.test(nameInput.value)) {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }
}

// Zipcode Field Validation
function validatzipcode() {
  const zipre = /^[0-9]{5}$/;

  if (!zipre.test(zipcodeInput.value)) {
    zipcodeInput.classList.add("is-invalid");
    zipcodeInput.classList.remove("is-valid");
  } else {
    zipcodeInput.classList.remove("is-invalid");
    zipcodeInput.classList.add("is-valid");
  }
}

// Email Field Validation
function validatemail() {
  const emailre = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;

  if (!emailre.test(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }
}

// Phone Number Field Validation
function validatphone() {
  const phonere = /^[0-9]{10}$/;

  if (!phonere.test(phoneInput.value)) {
    phoneInput.classList.add("is-invalid");
    phoneInput.classList.remove("is-valid");
  } else {
    phoneInput.classList.remove("is-invalid");
    phoneInput.classList.add("is-valid");
  }
}
