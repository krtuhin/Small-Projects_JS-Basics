// get two input field
let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

// function to convert celsiuos to fahrenheit
let celFun = function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah.value = f;
};

// function to convert fahrenheit to celsious
let fahFun = function () {
  let f = this.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel.value = c;
};

// call two function with input event
cel.addEventListener("input", celFun);
fah.addEventListener("input", fahFun);
