const ERRORborder = "2px solid var(--errorColor)";
const heightSize = "36px";

function validateForm() {
  event.preventDefault();

  //accessing elements
  const fNAME = document.getElementById("name");
  const EMAIL = document.getElementById("email");
  const MESSAGE = document.getElementById("message");

  //accessing error messages divs
  const nameERROR = document.getElementById("nameERROR");
  const emailERROR = document.getElementById("emailERROR");
  const msgERROR = document.getElementById("msgERROR");

  //Validation
  const nameRegex = /^[A-Za-z\s]{0,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //EMPTY
  //name
  if (fNAME.value === "") {
    fNAME.style.outline = ERRORborder;
    nameERROR.style.height = heightSize;
      setTimeout(() => {
        nameERROR.textContent = "Please fill out all required fields.";
    }, 200);
    
  }
  //email
  if (EMAIL.value === "") {
    EMAIL.style.outline = ERRORborder;
    emailERROR.style.height = heightSize;
    setTimeout(() => {
      emailERROR.textContent = "Please fill out all required fields.";
  }, 200);
   
  }
  //message
  if (MESSAGE.value === "") {
    MESSAGE.style.outline = ERRORborder;
    msgERROR.style.height = heightSize;
    setTimeout(() => {
        msgERROR.textContent = "Please fill out all required fields.";
    }, 200);
   
  }


  //INVALID
  if (!nameRegex.test(fNAME.value)) {
    fNAME.style.outline = ERRORborder;
    nameERROR.style.height = heightSize;
    setTimeout(() => {
        nameERROR.textContent = "Your Name must be 1-30 letters and separated by a space.";
    }, 200);
  }

  if (EMAIL.value !== "" && !emailRegex.test(EMAIL.value)) {
    EMAIL.style.outline = ERRORborder;
    emailERROR.style.height = heightSize;
    setTimeout(() => {
        emailERROR.textContent = "Invalid email address.";
    }, 200);

  }

}

//Typing reset

let inputEl = document.querySelectorAll("input, textarea");
let errorMessages = document.querySelectorAll(".errorMessages");

inputEl.forEach(function (element) {
  element.addEventListener("input", function () {

    element.style.outline = "1px solid var(--Primary-Color)";

    errorMessages.forEach(function (error) {
        error.textContent = "";
        error.style.height = "0px";
      });
  });
});
