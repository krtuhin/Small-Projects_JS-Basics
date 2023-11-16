let nav = document.getElementById("menu");

// function to fixed menu bar
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 190.354) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
