// function to change background
function change(color) {
  document.body.style.backgroundColor = color;
  let text = document.getElementsByClassName("txt");

  // when background is black
  if (color == "black") {
    document.getElementById("black").style.borderColor = "white";

    // text color will be white
    for (i of text) {
      i.style.color = "white";
    }
  } else {
    document.getElementById("black").style.borderColor = "black";
    for (i of text) {
      i.style.color = "black";
    }
  }
}
