let flag = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slides;

slideshow(flag);

// function for previous image
prev.addEventListener("click", function () {
  flag--;
  slideshow(flag);
});

// function for next image
next.addEventListener("click", function () {
  flag++;
  slideshow(flag);
});

// function to show the particular image
function slideshow(num) {
  slides = document.getElementsByClassName("slide");

  if (num == slides.length) {
    flag = 0;
    num = 0;
  } else if (num == -1) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let item of slides) {
    item.style.display = "none";
  }
  slides[num].style.display = "block";
}
