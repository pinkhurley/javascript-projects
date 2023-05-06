const secondsBox = document.querySelector(".seconds-box");
const timeApartBox = document.querySelector(".time-apart");

const timerBtn = document.querySelector(".timer-btn");
const tbody = document.querySelector("tbody");

const showTimer = (timer) => {
  let hours = Math.floor((timer / 1000 / 60 / 60) % 24);
  let mins = Math.floor((timer / 1000 / 60) % 60);
  let seds = Math.floor((timer / 1000) % 60);

  //   处理时间的显示格式 00
  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  seds = seds < 10 ? "0" + seds : seds;

  return hours + ":" + mins + ":" + seds;
};

var timerList = [];
// 定时器
var timer;
var startDate = 0;
var endDate = 0;
// 上一次持续的时长
var d_interval = 0;
// 存储上一次计时结束的日期
var suspendTime = 0;

const getStartEndDate = (startD, endD) => {
  startD = new Date(startD);
  endD = new Date(endD);

  let startDot = startD.getHours() > "12" ? "pm" : "am";
  let endDot = endD.getHours() > "12" ? "pm" : "am";

  let formatDate =
    startD.getHours() +
    ":" +
    startD.getMinutes() +
    startDot +
    " - " +
    endD.getHours() +
    ":" +
    endD.getMinutes() +
    endDot;

  return formatDate;
};

// const getTimerLength = (inter) => {
//   let mins = Math.floor(inter / 1000 / 60);
//   let seds = Math.floor((inter / 1000) % 60);
//   if (seds < 60 && mins < 1) {
//     return seds + "s";
//   } else if (mins > 0 && mins < 60) {
//     return mins + "mins " + seds + "s";
//   } else {
//     return "too much";
//   }
// };

// const getTimeApart = (lastEndD, endD) => {
//   if (lastEndD == 0) return "--";

//   let inv = endD - lastEndD;
//   let mins = Math.floor(inv / 1000 / 60);
//   let seds = Math.floor((inv / 1000) % 60);
//   if (seds < 60 && mins < 1) {
//     return seds + " sec";
//   } else if (mins > 0 && mins < 60) {
//     return mins + " mins " + seds + " sec";
//   } else {
//     return "too much";
//   }
// };

const getTimeInterval = (startD, endD, type) => {
  if (startD == 0) return "--";

  let inv = endD - startD;
  let mins = Math.floor(inv / 1000 / 60);
  let seds = Math.floor((inv / 1000) % 60);

  console.log(mins, seds);

  //   条件判断
  if (seds < 60 && mins < 1) {
    if (type == "LENGTH") return seds + " s";
    else if (type == "APART") return seds + " s";
  } else if (mins > 0 && mins < 60) {
    if (type == "LENGTH") return mins + "mins " + seds + "s";
    else if (type == "APART") return mins + " mins " + seds + " sec";
  } else {
    return "too much";
  }
};

const getTbody = (lists) => {
  tbody.innerHTML = lists
    .map(
      (list) =>
        `
    <tr>
        <td>${getTimeInterval(list.startDate, list.endDate, "LENGTH")}</td>
        <td>${getTimeInterval(list.lastEndDate, list.endDate, "APART")}</td>
        <td>${getStartEndDate(list.startDate, list.endDate)}</td>
    </tr>
    `
    )
    .join("");
};

const startTimer = () => {
  // 首先，获取点击start按钮的时间，毫秒
  startDate = Date.now();
  timer = setInterval(() => {
    let currentDate = Date.now();
    d_interval = currentDate - startDate;
    secondsBox.textContent = showTimer(d_interval);
  }, 1000 / 60);
};

const stopTimer = () => {
  endDate = Date.now();
  // 存储上次的结束时间
  var lastEndDate = 0;
  lastEndDate = suspendTime;
  suspendTime = endDate;
  // 显示间隔
  timeApartBox.textContent = getTimeInterval(lastEndDate, endDate, "APART");
  clearInterval(timer);
  timerList = [...timerList, { startDate, endDate, d_interval, lastEndDate }];
  getTbody(timerList);
};

timerBtn.addEventListener("click", () => {
  if (timerBtn.textContent === "Start") {
    startTimer();
    timerBtn.textContent = "Stop timer";
  } else if (timerBtn.textContent === "Stop timer") {
    stopTimer();
    timerBtn.textContent = "Start";
    // console.log(getStartEndDate(startDate, endDate));
  }
});
