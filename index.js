let form = document.querySelector("#form");
let textBox = document.querySelector(".rounded-btn");
let errorMessage = document.querySelector(".user-email-error");

let validEmail = email => {
  if (/(.+)@(.+){2,}\.(.+){2,}/.test(textBox.value)) {
    // valid email
    return true;
  } else {
    // invalid email
    return false;
  }
};

let submit = event => {
  event.preventDefault();
  if (validEmail()) {
    if (errorMessage.classList.contains("visible")) {
      errorMessage.classList.toggle("visible");
    }

    if (textBox.classList.contains("border-danger")) {
      textBox.classList.remove("border-danger");
    }
    // some logic to store user's email
  } else {
    if (!errorMessage.classList.contains("visible")) {
      errorMessage.classList.toggle("visible");
    }

    if (!textBox.classList.contains("border-danger")) {
      textBox.className += " border-danger";
    }
  }
};

form.onsubmit = submit;
