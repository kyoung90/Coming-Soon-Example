let form = document.querySelector("#form");
let textBox = document.querySelector(".rounded-btn");

let validEmail = email => {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(textBox.value)) {
      // valid email
      return true
    } else {
      // invalid email
      return false
    }
  };  

let submit = (event) => {
    event.preventDefault()
  if (validEmail()) {
    if (textBox.classList.contains("border-danger")) {
      textBox.classList.remove("border-danger");
    }
    // some logic to store user's email
  } else {
    if (!textBox.classList.contains("border-danger")){
        textBox.className += " border-danger";
    }
  } 
};

form.onsubmit = submit