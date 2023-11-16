// calling functions
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

// function to start watch
function start() {
  timer = true;
  stopwatch();
}

// function to stop watch
function stop() {
  timer = false;
}

// function to reset watch
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

// controller function for stopwatch
function stopwatch() {
  // counting time
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    // convert into string
    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    // call function with timeout method
    setTimeout("stopwatch()", 10);
  }
}
