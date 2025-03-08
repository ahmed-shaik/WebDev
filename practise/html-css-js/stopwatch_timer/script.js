const minutesLabel = document.querySelector("#min");
const secondsLabel = document.querySelector("#sec");
const millisecondsLabel = document.querySelector("#milli");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

const laplist = document.querySelector("#laplist");

let min = 0;
let sec = 0;
let milli = 0;
let interval;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}
function pauseTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}
function stopTimer() {
  const li = document.createElement("li");
  li.textContent = `${padTime(min)}:${padTime(sec)}.${padTime(milli)}`;
  laplist.appendChild(li);
  clearInterval(interval);
  min = 0;
  sec = 0;
  milli = 0;
  displayTimer();
  startBtn.disabled = false;
}
function resetTimer() {
  min = 0;
  sec = 0;
  milli = 0;
  displayTimer();
  clearInterval(interval);
  laplist.innerHTML = "";
  startBtn.disabled = false;
}
function updateTimer() {
  milli++;
  if (milli === 100) {
    milli = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
  }
  displayTimer();
}

function displayTimer() {
  minutesLabel.textContent = padTime(min);
  secondsLabel.textContent = padTime(sec);
  millisecondsLabel.textContent = padTime(milli);
}
function padTime(time) {
  return time.toString().padStart(2, "0");
}
