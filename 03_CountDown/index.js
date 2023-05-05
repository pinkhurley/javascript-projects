const daysBox = document.querySelector(".days");
const hoursBox = document.querySelector(".hours");
const minutesBox = document.querySelector(".minutes");
const secondsBox = document.querySelector(".seconds");
const deadlineBox = document.querySelector(".deadline");

const countdown = (deadline) => {
  // 返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数。
  let currentDate = Date.now();
  let deadline_timmer = new Date(deadline);
  let elapsed = deadline_timmer - currentDate;

  let days = parseInt(elapsed / 1000 / 60 / 60 / 24);
  let hours = parseInt((elapsed / 1000 / 60 / 60) % 24);
  let minutes = parseInt((elapsed / 1000 / 60) % 60);
  let seconds = parseInt((elapsed / 1000) % 60);

  daysBox.firstChild.nodeValue = days;

  hours < 10
    ? (hoursBox.firstChild.nodeValue = "0" + hours)
    : (hoursBox.firstChild.nodeValue = hours);

  minutes < 10
    ? (minutesBox.firstChild.nodeValue = "0" + minutes)
    : (minutesBox.firstChild.nodeValue = minutes);
  seconds < 10
    ? (secondsBox.firstChild.nodeValue = "0" + seconds)
    : (secondsBox.firstChild.nodeValue = seconds);
};

// countdown("2023-05-10 22:00:00");
setInterval(() => {
  countdown("2023-05-10 22:00:00");
}, 1000);
