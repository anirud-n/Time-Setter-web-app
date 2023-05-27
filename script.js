let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let id;

twentySecondsBtn.onclick = function () {
  clearInterval(id);
  let value = 20;
  id = setInterval(function () {
    timerText.textContent = value + " seconds left";
    value = value - 1;
    if (value === -1) {
      clearInterval(id);
      timerText.textContent = "Your moment is complete";
    }
  }, 1000);
};

thirtySecondsBtn.onclick = function () {
  clearInterval(id);
  let value = 30;
  id = setInterval(function () {
    timerText.textContent = value + " seconds left";
    value = value - 1;
    if (value === -1) {
      clearInterval(id);
      timerText.textContent = "Your moment is complete";
    }
  }, 1000);
};

fortySecondsBtn.onclick = function () {
  clearInterval(id);
  let value = 40;
  id = setInterval(function () {
    timerText.textContent = value + " seconds left";
    value = value - 1;
    if (value === -1) {
      clearInterval(id);
      timerText.textContent = "Your moment is complete";
    }
  }, 1000);
};

oneMinuteBtn.onclick = function () {
  clearInterval(id);
  let value = 60;
  id = setInterval(function () {
    timerText.textContent = value + " seconds left";
    value = value - 1;
    if (value === -1) {
      clearInterval(id);
      timerText.textContent = "Your moment is complete";
    }
  }, 1000);
};
