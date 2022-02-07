// getting HTML elements and initializing variables
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let playBtn = document.querySelector("#playBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let stopBtn = document.querySelector("#stopBtn");
let counter = 0;

// adding events to the elements
playBtn.addEventListener("click", startCounting);
pauseBtn.addEventListener("click", pauseCounting);
stopBtn.addEventListener("click", stopCounting);

// functions
