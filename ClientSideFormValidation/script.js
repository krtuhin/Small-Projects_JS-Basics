// elements are selected by id
let username = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("user-error");
let passError = document.getElementById("pass-error");
let flag = true;

// function to validate form
function validateForm() {
  if (username.value == "") {
    userError.innerHTML = "username is empty..!";
  } else if (username.value.length < 3) {
    userError.innerHTML = "username must be greater than 3 characters..!";
  } else {
    userError.innerHTML = "";
  }
  if (password.value == "") {
    passError.innerHTML = "password is empty..!";
  } else if (password.value.length < 8) {
    passError.innerHTML = "password must be greater than 8 characters..!";
  } else {
    passError.innerHTML = "";
  }
  if (password.value.length > 7 && username.value.length > 3) {
    return true;
  }
  return false;
}
