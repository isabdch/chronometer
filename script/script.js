// getting HTML elements and initializing variables
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let stopBtn = document.querySelector("#stopBtn");
let counterSeconds = 1;
let counterMinutes = 1;
let counterHours = 1;
let interval;

// functions
function startCounting() {
  interval = setInterval(update, 1000);
  playBtn.disabled = true;
}

function update() {
  // seconds counting
  if (counterSeconds < 10) {
    seconds.innerHTML = "0" + counterSeconds;
  } else {
    seconds.innerHTML = counterSeconds;
  }

  // minutes counting
  if (counterSeconds > 59 && parseInt(minutes.innerHTML) < 9) {
    seconds.innerHTML = "00";
    counterSeconds = 0;
    minutes.innerHTML = "0" + counterMinutes;
    counterMinutes++;
  } else if (counterSeconds > 59) {
    seconds.innerHTML = "00";
    counterSeconds = 0;
    minutes.innerHTML = counterMinutes;
    counterMinutes++;
  }

  // hours counting
  if (counterMinutes > 60 && parseInt(hours.innerHTML) < 9) {
    minutes.innerHTML = "00";
    counterMinutes = 0;
    hours.innerHTML = "0" + counterHours;
    counterHours++;
  } else if (counterMinutes > 60) {
    minutes.innerHTML = "00";
    counterMinutes = 0;
    hours.innerHTML = counterHours;
    counterHours++;
  }

  counterSeconds++;
}

function pauseCounting() {
  seconds.innerHTML = seconds.innerHTML;
  minutes.innerHTML = minutes.innerHTML;
  minutes.innerHTML = minutes.innerHTML;
  clearInterval(interval);
  playBtn.disabled = false;
}

function stopCounting() {
  clearInterval(interval);
  playBtn.disabled = false;
  counterSeconds = 0;
  counterMinutes = 0;
  counterSeconds = 0;
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
}
