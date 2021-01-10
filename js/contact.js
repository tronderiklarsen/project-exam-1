const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const firstNameValue = name.value;

  if (checkInputLength(firstNameValue)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailValue = email.value;

  if (checkInputLength(emailValue)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue)) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  const comment = document.querySelector("#comment");
  const commentError = document.querySelector("#commentError");
  const commentValue = comment.value;

  if (validateComment(commentValue)) {
    commentError.style.display = "none";
  } else {
    commentError.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function validateComment(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= 10) {
    return true;
  } else {
    return false;
  }
}
