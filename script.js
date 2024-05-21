let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function updateDisplay() {
  let hrs = hours < 10 ? "0" + hours : hours;
  let mins = minutes < 10 ? "0" + minutes : minutes;
  let secs = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = `${hrs}:${mins}:${secs}`;
}

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function watchReset() {
  watchStop();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
}
