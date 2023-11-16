let text = document.getElementById("textbox");
let words = document.getElementById("word");
let chars = document.getElementById("char");

// function to calculate words and characters
text.addEventListener("input", function () {
  let str = this.value;
  let w = str.split(" ");

  // remove empty string to calculate words
  let cleanList = w.filter(function (value) {
    return value != "";
  });
  chars.innerHTML = str.length;
  words.innerHTML = cleanList.length;
});
